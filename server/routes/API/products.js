var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../../models/product').Product
var Category = require('../../models/category').Category

var Brand = require('../../models/brand').Brand
router.get('/', function (req, res, next) {

  Product.find({})
  .populate('brand')
  .populate('categories')
  .exec(function(err, products){
    res.send(products)
  })

});

router.post('/',function (req, res, next) {

  //Build the query to only include products with all categories
  var query = {$and: []}
  for (var i=0; i < req.body.category.length; i++){
    query.$and.push({
      categories: req.body.category[i]
    })
  }

  Product.find(query)
  .exec(function(err, products){
    res.send(products)
  })

})

module.exports = router;
