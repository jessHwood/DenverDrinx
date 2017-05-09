//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://ntutchton@localhost:5432/DenverDrinx');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Bar = sequelize.import('./bar');