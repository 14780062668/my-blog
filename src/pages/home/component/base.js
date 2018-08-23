// 原型对象
var A = {
	count: 0,
	print: function() {
		++this.count;
		console.log('hello', this.count);
	}
};

// 实例对象
var B = Object.create(A);
console.log(Object.getPrototypeOf(B) === A); // true
function keys(obj) {
	console.log('obj================', new Date().getTime());
	console.time('obj');
	Object.getOwnPropertyNames(obj).forEach(val => {
		console.log(val);
	});
	Object.keys(obj).forEach(val => {
		console.log(val);
	});
	console.timeEnd('obj');
}
let promise = new Promise((resolve, reject) => {
	resolve();
});
promise
	.then(keys(A))
	.then(keys(B))
	.then(keys(new Date()));
