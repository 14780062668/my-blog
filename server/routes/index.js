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
				result: {
					sizes: data.length,
					list: data
				}
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
				result: {
					sizes: data.length,
					list: data
				}
			});
		}
	});
});
// 文章列表
router.post('/api/articleList', function (req, res, next) {
	models.articleList.find({}, function (err, data) {
		if (err) {
			res.json({
				status: '-1',
				msg: err.message
			});
		} else {
			res.json({
				status: '200',
				msg: '返回成功',
				result: {
					sizes: data.length,
					list: data
				}
			});
		}
	});
});

//查询商品列表数据
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
