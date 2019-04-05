var mongoose = require("mongoose");

var AttributeValueSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: String,
  categoryAttribute:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryAttribute",
    required: true
  },

})

var AttributeValue = mongoose.model('AttributeValue', AttributeValueSchema)

module.exports = {
  AttributeValue: AttributeValue
}