//Connect
var Sequelize = require('sequelize');

// require('dotenv').config();
var sequelize = new Sequelize('postgres://jesswood@localhost:5432/denverdrinx');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.define('user', {
  displayName: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  instanceMethods: {
    comparePassword: function(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }  
});

//Only needed for setup
User.sync({force: true});

User.beforeCreate(function(user, options) {
	//Async didn't work with this hook :(
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
});

// module.exports = User;

var Bar = sequelize.import('./bar');

module.exports.models = {
	Bar : Bar,
	User : User
};