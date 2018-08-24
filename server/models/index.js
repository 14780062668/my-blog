const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleType = new Schema({
  "id":String,
	"name":String,
	"createDate": Number
});
const article = new Schema({
  "id":{type:String},
  "articleName":String,
  "title":Number,
  "content":String,
	"createDate":Number,
	"author": String,
	"authorId": String,
  "editDate":String
});

module.exports = mongoose.model('articleType',articleType);
