//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://jesswood@localhost:5432/denverdrinx');


//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Bar = sequelize.import('./bar');

module.exports.models = {
	Bar : Bar
};