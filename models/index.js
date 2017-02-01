var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Day.hasOne(Hotel);
Day.hasMany(Restaurant);
Day.hasMany(Activity);

module.exports = {db: db, Hotel: Hotel, Restaurant: Restaurant, Activity: Activity, Day: Day};
