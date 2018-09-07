const log4js = require('log4js');
log4js.configure({
	appenders: { 
		cheese: { 
			type: 'file',
			filename: './logs/log4js.log' 
		}
	},
	categories: { 
		default: { 
			appenders: ['cheese'], 
			level: 'error' 
		}
	},
	levels: 'INFO',
	replaceConsole: true	// 替换console.log
});

const log = log4js.getLogger('cheese');

module.exports = log;
