var router = require('express').Router();
var Sequelize = require('sequelize');
var index = require('../../models');
var db = index.db;
var Activity = index.Activity;
var Hotel = index.Hotel;
var Place = index.Place;
var Restaurant = index.Restaurant;
var Day= index.Day;

//gets list of all days
router.get('/api/days',function(req, res, next){
  Day.findAll()
    .then(function(foundDays){
      console.log("found days:", foundDays);
    })
    .catch(next);
});

//get one specific day
router.get('/api/days/:id',function(req, res, next){

});

//delete day
router.delete('/api/days/:id',function(req, res, next){

});

//put day
router.post('/api/days/:id',function(req, res, next){

});

/*add attraction to day*/
router.post('/api/days/:id/:type',function(req, res, next){

});

/*remove attraction to day*/
router.delete('/api/days/:id/:type',function(req, res, next){

});






module.exports = router;
