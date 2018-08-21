const http = require('http');
const url = require('url');
const util = require('util');
const opn = require('opn');
const fs = require('fs');
const port = 8001;
const ip = '127.0.0.1';


http.createServer((req, res) => {
	//res.statusCode = 200;
	// res.setHeader(200, {
	// 	'Content-Type': 'text/plain'
	// });
	let pathName = url.parse(req.url).pathname;
	console.log(fs);
	fs.readFile(pathName.substring(1), (err, data) => {
		if(err) {
			res.writeHead(404, {
				'Content-type': 'text/html'
			});
		}else{
			res.writeHead(200, {
				'Content-type': 'text/html'
			});
			res.write(data.toString());
		}
		res.end();
	});
	// res.end();
}).listen(port, ip, ()=> {
	console.log(`Server running at ${ip}:${port}`);
	opn(`http://${ip}:${port}`, {app: 'google chrome'});
});
