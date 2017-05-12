//Connect
var Sequelize = require('sequelize');

// var sequelize = new Sequelize('postgres://jesswood@localhost:5432/denverdrinx');

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize('postgres://jesswood@localhost:5432/denverdrinx');
}

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Bar = sequelize.import('./bar');

module.exports.models = {
	Bar : Bar
};