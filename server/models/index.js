const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleType = new Schema({
  "id":String,
	"name":String,
	"createTime": Number
});
const largeType = new Schema({
  "id": String,
  "name": String,
	"createTime":Number
});


export default {
	articleType: mongoose.model('articleType', articleType),
	largeType: mongoose.model('largeType', largeType)
};
// module.exports = mongoose.model('articleType',articleType);
