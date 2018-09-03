let promise = new Promise((resolve, reject) => {
	resolve();
});
// module.exports = promise;

function fn1() {
	console.log('fn1');
}
function fn2() {
	console.log('fn2');
}

promise.then(fn1).then(fn2);