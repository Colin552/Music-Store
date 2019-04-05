var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../../models/product').Product
var Category = require('../../models/category').Category

var Brand = require('../../models/brand').Brand
router.get('/', function (req, res, next) {

  Product.find({})
  .populate('brand')
  .populate('category')
  .exec(function(err, products){
    res.send(products)
  })

});

router.post('/',function (req, res, next) {


  Product.find({category: req.body.category})
  .exec(function(err, products){
    res.send(products)
  })

})

module.exports = router;
