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

const promise = new Promise((resolve, reject) => {
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
	let count = 0;
	promise.then(() => {
		let modelList = models.articleList.find(params);
		modelList.count({}, (err, count) => {
			if(err){
				res.json({
					status: '-1',
					msg: err.message
				});
			}else{
				count = count;
			}
			console.log('count==end', count);
		});
	}).then(()=> {
		let modelList = models.articleList.find(params);
		modelList.skip(skip).limit(pageSize);
		modelList.sort({
			[sort]: -1
		});
		modelList.exec((err, data) => {
			console.log('counts==', count);
			console.log('data==', data);
			if (err) {
				res.json({
					status: '-1',
					msg: err.message
				});
			} else {
				console.log('counts==end2', count);
				res.json({
					status: '200',
					msg: '返回成功',
					result: {
						currentPage: page.currentPage,
						pageSize: page.pageSize, 
						list: data,
						total: count
					}
				});
			}
		});
	});
	// modelList.count({}, (err, count) => {
	// 	if(err) {
	// 		res.json({
	// 			status: '-1',
	// 			msg: err.message
	// 		});
	// 	}else{
	// 		modelList.skip(skip).limit(pageSize);
	// 		modelList.sort({
	// 			[sort]: -1
	// 		});
	// 		modelList.exec((err, data) => {
	// 			if (err) {
	// 				res.json({
	// 					status: '-1',
	// 					msg: err.message
	// 				});
	// 			} else {
	// 				res.json({
	// 					status: '200',
	// 					msg: '返回成功',
	// 					result: {
	// 						currentPage: page.currentPage,
	// 						pageSize: page.pageSize, 
	// 						list: data,
	// 						total: count
	// 					}
	// 				});
	// 			}
	// 		});
	// 	}
	// });
	
});

// 查询商品列表数据
router.get("/list", function (req, res, next) {
	let page = parseInt(req.param("page"));
	let pageSize = parseInt(req.param("pageSize"));
	let priceLevel = req.param("priceLevel");
	let sort = req.param("sort");
	let skip = (page - 1) * pageSize;
	var priceGt = '', priceLte = '';
	let params = {};
	if (priceLevel != 'all') {
		switch (priceLevel) {
			case '0': priceGt = 0; priceLte = 100; break;
			case '1': priceGt = 100; priceLte = 500; break;
			case '2': priceGt = 500; priceLte = 1000; break;
			case '3': priceGt = 1000; priceLte = 5000; break;
		}
		params = {
			salePrice: {
				$gt: priceGt,
				$lte: priceLte
			}
		}
	}
	let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
	goodsModel.sort({ 'salePrice': sort });
	goodsModel.exec(function (err, doc) {
		if (err) {
			res.json({
				status: '1',
				msg: err.message
			});
		} else {
			res.json({
				status: '0',
				msg: '',
				result: {
					count: doc.length,
					list: doc
				}
			});
		}
	})
});

module.exports = router;
