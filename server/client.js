const http = require('http');

http.get('http://www.imooc.com/u/card%20?jsonpcallback=jQuery19105376812357138692_1531132817271&_=1531132817272', res => {
	let data = '';
	res.on('data', (chunk)=> {
		data += chunk;
	});
	console.log('data',data);
	res.on('end', ()=>{
		let result = JSON.parse(data);
		console.log('result2',result);
	});
});