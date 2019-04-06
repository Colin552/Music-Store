var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sku: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  salePrice: {type: Number, required: false},
  regularPrice: {type: Number, required: true},
  finish: {type: String, required: false},
  wattage: {type: Number, required: false},
  categories:
  [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }],
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true
  }
})

var Product = mongoose.model('Product', ProductSchema)

module.exports = {
  Product: Product
}