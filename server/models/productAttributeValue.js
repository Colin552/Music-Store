var mongoose = require("mongoose");

var ProductAttributeValueSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: String,
  attributeValue:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AttributeValue",
    required: true
  },
  product:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  }
})

var ProductAttributeValue = mongoose.model('ProductAttributeValue', ProductAttributeValueSchema)

module.exports = {
  ProductAttributeValue: ProductAttributeValue
}