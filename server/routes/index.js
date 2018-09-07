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
router.post('/api/articleList', function (req, res, next) {
	const { page, typeId, tagId, sort } = req.body;
	const title = req.body.search;
	const { currentPage, pageSize } = page;
	let skip = (currentPage - 1) * pageSize;
	let params = {};
	if(typeId){
		params.typeId = typeId;
	}
	if(tagId){
		params.tagId = tagId;
	}
	// 模糊查询
	if(title){
		params.title =  new RegExp(title);
	}
	let p1 = new Promise((resolve,reject) => {
		let modelList = models.articleList.find(params);
		resolve(modelList.count());
	});
	let p2 = new Promise((resolve,reject) => {
		let modelList = models.articleList.find(params);
		modelList.skip(skip).limit(pageSize);
		modelList.sort({
			[sort]: -1
		});
		resolve(modelList.exec());
	});
	Promise.all([p1, p2]).then(result => {
		res.json({
			status: '200',
			msg: '返回成功',
			result: {
				currentPage: page.currentPage,
				pageSize: page.pageSize, 
				list: result[1],
				total: result[0]
			}
		});
	}).catch(err => {
		console.log('err===', err);
	});
});

// 文章详情
router.post('/api/articleDetail', function (req, res, next) {
	const { id } = req.body;
	models.articleList.find({
		id
	}, (err, data) => {
		if(err){
			res.json({
				status: '-1',
				msg: err.message
			});
		}else{
			let result = data[0]; 
			result.readNumber += 1;
			result.save();
			res.json({
				status: '200',
				msg: '返回成功',
				result: data
			});
		}
	}).catch(err => {
		console.log('err===', err);
	});
});

// 上传图片 addImg
router.post('/api/addImg', function (req, res, next) {
	const { id } = req.body;
	models.articleList.find({
		id
	}, (err, data) => {
		if(err){
			res.json({
				status: '-1',
				msg: err.message
			});
		}else{
			let result = data[0]; 
			result.readNumber += 1;
			result.save();
			res.json({
				status: '200',
				msg: '返回成功',
				result: data
			});
		}
	}).catch(err => {
		console.log('err===', err);
	});
});

module.exports = router;
