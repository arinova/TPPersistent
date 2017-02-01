var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
	number: Sequelize.INTEGER
}, {
	timestamps: false
});

module.exports = Day;
