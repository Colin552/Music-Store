var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  subCategories:
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }],
  categoryAttributes:
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryAttribute"
    }]
})

var Category = mongoose.model('Category', CategorySchema)

module.exports = {
  Category: Category
}