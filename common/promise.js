var p1 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
	console.log(results); // 获得一个Array: ['P1', 'P2']
});