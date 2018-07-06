
/**
 * node start 入口
 */

// 基本模块
const colors = require('colors');
const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const favicon = require('serve-favicon');
const swig = require('swig');
const http = require('http');
const request = require('request');
// 中间件模块
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Docker容器的环境变量
if(process.env.APP_ENV){
	// NODE_ENV
	process.env.NODE_ENV = process.env.APP_ENV;
	console.info("NODE START-UP :::::: Get process.env.NODE_ENV by process.env.APP_ENV", process.env.NODE_ENV);
} else {
	console.info("NODE START-UP :::::: Get process.env.NODE_ENV", process.env.NODE_ENV);
}
let appConfigCenterUrl;
if(process.env.APP_CONFIG_CENTER_URL){
	appConfigCenterUrl = process.env.APP_CONFIG_CENTER_URL;
	console.error("NODE START-UP :::::: Get APP_CONFIG_CENTER_URL success", appConfigCenterUrl);
} else {
	appConfigCenterUrl = "http://mgr2.sxw.cn:10001/master/node-score.json";
	console.error("NODE START-UP :::::: Not found APP_CONFIG_CENTER_URL, Use default url", appConfigCenterUrl);
}
console.info("NODE START-UP :::::: request.get start");
let t = new Date();
request.get({
	url: appConfigCenterUrl,
	timeout: 15000,
	json: true
}, function (error, response, body) {
	let requestTime = new Date() - t;
	if(error){
		console.info("NODE START-UP :::::: request.get back:: error", requestTime, "ms");
		console.error(error, response, body);
	} else if(!body || typeof body !== "object"){
		console.info("NODE START-UP :::::: request.get back:: not found body", requestTime, "ms");
		console.error(error, response, body);
	} else {
		console.info("NODE START-UP :::::: request.get back:: success", requestTime, "ms");
		body = JSON.stringify(body);
		process.env.CONFIGCENTER = body;
	}

	// const session = require('express-session');
	// const RedisStore = require('connect-redis')(session);
	// 配置模块
	const config = require('./config/index');
	// 认证模块
	const authModel = require('./common/auth');
	// 日志处理模块
	const logger = require('./common/logger');
	const requestLog = require('./common/logger.request');
	// 路由模块
	const site = require('./routes/site');
	const api = require('./routes/api');
	// 引用Raven，并配置
	if(config.nodeRavenUrl) var Raven = require('raven').config(config.nodeRavenUrl).install();

	const app = express();

	if(Raven) app.use(Raven.requestHandler());

	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(history({
		rewrites: config.rewrites
	}));

	// compression
	app.use(compression());

	// html template parsing
	app.engine('html', swig.renderFile);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'html');

	// Request logger
	app.use(requestLog);

	// static
	app.use(config.dir, express.static(path.join(__dirname, 'public')));
	app.use(config.dir+'/dist', express.static(path.join(__dirname, 'dist')));

	// middleware
	app.use(bodyParser.json({limit: "1mb"}));
	app.use(bodyParser.urlencoded({limit: '1mb', extended: false }));
	// app.use(bodyParser.json());
	//app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	// app.use(session({
	// 	store: new RedisStore(config.redisStoreOptions),
	// 	name: "session_id",
	// 	secret: 'sx_school_app',
	// 	resave: true,
	// 	saveUninitialized: false
	// 	// cookie: {maxAge: config.sessionMaxAge}
	// }));

	// auth TODO
	app.use(authModel.authApp);


	// routes
	app.use(config.dir+'/', site);
	app.use(config.dir+'/api', api);

	// error handling
	app.use(function(req, res, next) {
		let err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handling
	app.use(function(err, req, res, next) {
		logger.info(err);
		if(Raven) Raven.captureException(err);
		if(err.status === 404){
			res.status(err.status || 404);
			res.render('404', {
				message: err.message,
				error: err
			});
		} else {
			res.status(err.status || 500);
			res.render('500', {
				message: err.message,
				error: err
			});
		}
	});


	// node server start
	const port = normalizePort(config.port || '3000');
	app.set('port', port);

	/**
	 * Create HTTP server.
	 */
	const server = http.createServer(app);

	/**
	 * Listen on provided port, on all network interfaces.
	 */
	server.listen(port);
	server.on('error', onError);
	server.on('listening', onListening);


	function onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}
		let bind = typeof port === 'string'
			? 'Pipe ' + port
			: 'Port ' + port;
		// handle specific listen errors with friendly messages
		switch (error.code) {
		case 'EACCES':
			logger.error(bind + ' requires elevated privileges');
			break;
		case 'EADDRINUSE':
			logger.error(bind + ' is already in use');
			break;
		default:
			throw error;
		}
	}

	function onListening() {
		let addr = server.address();
		let bind = typeof addr === 'string'
			? 'Pipe is ' + addr
			: 'Port is ' + addr.port;
		logger.info('NODE START-UP :::::: NODE_ENV is', process.env.NODE_ENV);
		logger.info('NODE START-UP :::::: Host is', config.host, bind);
		logger.info('NODE START-UP :::::: Config gateway host is', config.servers.host);
		logger.info('NODE START-UP :::::: APP START SUCCESS');
		logger.info('--------------------------------------------------------------------------------------------------------------------------', "\n\n\n");
	}

	function normalizePort(val) {
		let port = parseInt(val, 10);
		if (isNaN(port)) {
			// named pipe
			return val;
		}
		if (port >= 0) {
			// port number
			return port;
		}
		return false;
	}

	module.exports = app;

});
