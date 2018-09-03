const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleType = new Schema({
  "id":String,
	"name":String,
	"createTime": Number
});
const articleTag = new Schema({
  "id": String,
	"name": String,
	"createTime": Number,
});
const articleList = new Schema({
  "id": String,
	"title": String,
	"tagId": Array,
	"typeId": String,
	"author": String,
	"content": String,
	"commentNumber": Number,
	"readNumber": Number,
	"createTime": String,
	"editTime": String
});
const models = {
	articleType: mongoose.model('articleType', articleType),
	articleTag: mongoose.model('articleTag', articleTag),
	articleList: mongoose.model('articleList', articleList)
};
module.exports = models;