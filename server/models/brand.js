var mongoose = require("mongoose");

var BrandSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
})

var Brand = mongoose.model('Brand', BrandSchema)

module.exports = {
  Brand: Brand
}