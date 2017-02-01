var router = require('express').Router();
var Sequelize = require('sequelize');
var index = require('../../models');
var db = index.db;
var Activity = index.Activity;
var Hotel = index.Hotel;
var Place = index.Place;
var Restaurant = index.Restaurant;

router.get('/api/hotels', function(req, res, next) {
	Hotel.findAll()
	.then(function(hotels) {
		res.json(hotels);
	})
	.catch(next);
});


router.get('/api/restaurants', function(req, res, next) {
	Restaurant.findAll()
	.then(function(restaurants) {
		res.json(restaurants);
	})
	.catch(next);
});

router.get('/api/activities', function(req, res, next) {
	Activity.findAll()
	.then(function(activities) {
		res.json(activities);
	})
	.catch(next);
});

module.exports = router;