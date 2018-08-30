import { articleType } from '../models/index.js';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const type = require('../models/index');

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


// router.get('/xxx',function(){

// 	let data = new ArticleType({id:"88",name:"xxx"});
// 	data.save(function (err, fluffy) {
// 		if (err) return console.error(err);
// 		console.log(err, fluffy);
//   });
// });

router.get('/articleType', function (req, res, next) {
	articleType.find({}, function (err, data) {
		// console.log(err, data);
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

router.get('/largeType', function (req, res, next) {
	articleType.find({}, function (err, data) {
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
