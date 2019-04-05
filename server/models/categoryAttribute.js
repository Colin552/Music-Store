var mongoose = require("mongoose");

var CategoryAttributeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
})

var CategoryAttribute = mongoose.model('CategoryAttribute', CategoryAttributeSchema)

module.exports = {
  CategoryAttribute: CategoryAttribute
}