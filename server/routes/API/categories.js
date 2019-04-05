var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../../models/category').Category


router.get('/', function (req, res, next) {

  Category.find({})
  .populate('subCategories')
  .exec(function(err, categories){
    var topCategories = [];
    categories.forEach(function(entry){
      if(entry.subCategories === undefined || entry.subCategories.length > 0){
        topCategories.push(entry)
      }
    })
    res.send(topCategories)
  })

});

router.post('/',function (req, res, next) {

})

module.exports = router;
