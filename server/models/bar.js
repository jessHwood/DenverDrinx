module.exports = function(sequelize, Sequelize){
	var model = sequelize.define('bar', {
		//what do we put into our bar info?
		test: Sequelize.STRING
	});
	return model;
};