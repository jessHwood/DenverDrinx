//Connect
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

require('dotenv').config();
var sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/denverdrinx');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Bar = sequelize.import('./bar');

module.exports.models = {
	Bar : Bar
};