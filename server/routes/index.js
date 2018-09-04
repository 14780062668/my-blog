const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/index');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/article');

mongoose.connection.on("connected", function () {
	console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
	console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
	console.log("MongoDB connected disconnected.")
});

//  文章类型
router.get('/api/articleType', function (req, res, next) {
	models.articleType.find({}, function (err, data) {
		if (err) {
			res.json({
				status: '-1',
				msg: err.message
			});
		} else {
			res.json({
				status: '200',
				msg: '返回成功',
				list: data
			});
		}
	});
});
// 文章标签
router.get('/api/articleTag', function (req, res, next) {
	models.articleTag.find({}, function (err, data) {
		if (err) {
			res.json({
				status: '-1',
				msg: err.message
			});
		} else {
			res.json({
				status: '200',
				msg: '返回成功',
				list: data
			});
		}
	});
});
// 写文章
router.post('/api/addArticle', function (req, res, next) {
	const param = {
		id: req.body.createTime.toString(),
		commentNumber: 0,
		readNumber: 0
	}
	req.body = Object.assign({}, req.body, param);
	const monInsert = new models.articleList(req.body);
	monInsert.save(function(err, data){
		if(err){
			console.log(err);
			res.json({
				status: '-1',
				msg: err.message
			});
		}else{
			console.log('成功插入数据');
			res.json({
				status: '200',
				msg: '返回成功',
				result: data
			});
		}
	});
});
// 文章列表
let count = '';
let promise = new Promise((resolve,reject) => {
	resolve();
});
router.post('/api/articleList', function (req, res, next) {
	const { page, typeId, tagId, sort } = req.body;
	const { currentPage, pageSize } = page;
	let skip = (currentPage - 1) * pageSize;
	let params = {};
	if(typeId){
		params.typeId = typeId;
	}
	if(tagId){
		params.tagId = tagId;
	}
	let p1 = new Promise((resolve,reject) => {
		let modelList = models.articleList.find(params);
		resolve(modelList.count());
		//modelList.count({}, (err, count) => {
			// if(err){
			// 	res.json({
			// 		status: '-1',
			// 		msg: err.message
			// 	});
			// }else{
			// 	count = count;
			// }
		// 	resolve(count);
		// 	return count;
		// });
	});
	let p2 = new Promise((resolve,reject) => {
		let modelList = models.articleList.find(params);
		modelList.skip(skip).limit(pageSize);
		modelList.sort({
			[sort]: -1
		});
		resolve(modelList.exec());
		//  modelList.exec((err, data) => {
			// if (err) {
			// 	res.json({
			// 		status: '-1',
			// 		msg: err.message
			// 	});
			// } else {
			// 	// res.json({
			// 	// 	status: '200',
			// 	// 	msg: '返回成功',
			// 	// 	result: {
			// 	// 		currentPage: page.currentPage,
			// 	// 		pageSize: page.pageSize, 
			// 	// 		list: data,
			// 	// 		total: 111
			// 	// 	}
			// 	// });
			// 
			// resolve(data);
			// return data;
		//});
	});
	Promise.all([p1, p2]).then(result => {
		console.log('result=====', result);
		res.json({
			status: '200',
			msg: '返回成功',
			result: {
				currentPage: page.currentPage,
				pageSize: page.pageSize, 
				list: result,
				total: result
			}
		});
	}).catch(err => {
		console.log('err===', err);
	});
	console.log(result);

	// describe('Query Promise', function(){
	// 	it('test', function(done){
	// 		var a = User.find({uname: 'a'}).exec()
	// 		var b = User.find({uname: 'd'}).exec()
	// 		var c = User.find({uname: 'c'}).exec()
	// 		var d = User.find({uname: 'e'}).exec()
			
	// 		Promise.all([a,b,c,d]).then(function(results){
	// 			console.log(results)
	// 			done()
	// 		})
			
	// 	})
		
	// })
	// promise.then(() => {
	// 	let modelList = models.articleList.find(params);
	// 	modelList.count({}, (err, count) => {
	// 		if(err){
	// 			res.json({
	// 				status: '-1',
	// 				msg: err.message
	// 			});
	// 		}else{
	// 			count = count;
	// 		}
	// 		console.log('count==end', count);
	// 	});
	// }).then(()=> {
	// 	let modelList = models.articleList.find(params);
	// 	modelList.skip(skip).limit(pageSize);
	// 	modelList.sort({
	// 		[sort]: -1
	// 	});
	// 	modelList.exec((err, data) => {
	// 		console.log('counts==', count);
	// 		console.log('data==', data);
	// 		if (err) {
	// 			res.json({
	// 				status: '-1',
	// 				msg: err.message
	// 			});
	// 		} else {
	// 			console.log('counts==end2', count);
	// 			res.json({
	// 				status: '200',
	// 				msg: '返回成功',
	// 				result: {
	// 					currentPage: page.currentPage,
	// 					pageSize: page.pageSize, 
	// 					list: data,
	// 					total: count
	// 				}
	// 			});
	// 		}
	// 	});
	// });
	
});

module.exports = router;
