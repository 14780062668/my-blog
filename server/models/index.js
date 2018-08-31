const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleType = new Schema({
  "id":String,
	"name":String,
	"createTime": Number
});
const articleList = new Schema({
  "id": String,
	"name": String,
	"tagId": String,
	"tagName": String,
	"typeId": String,
	"typeName": String,
	"createTime": Number,
	"editTime": Number	
});
const models = {
	articleType: mongoose.model('articleType', articleType),
	articleList: mongoose.model('articleList', articleList)
};
module.exports = models;