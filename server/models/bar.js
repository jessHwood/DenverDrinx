module.exports = function(sequelize, Sequelize){
	var model = sequelize.define('bar', {
		//day is a number 0-6 representing the day of the week
		day				: Sequelize.ARRAY( Sequelize.INTEGER ),
		//hours is an array of two integer pairs (0-23) represeting the 
		//starting hour and ending hour of a happy hour at a day of the same index
		hours			: Sequelize.ARRAY( Sequelize.ARRAY( Sequelize.INTEGER )),
		//minutes is an array of two integer pairs (0-59) representing the number of 
		//minutes to be added to each hour in the same index location
		minutes 		: Sequelize.ARRAY( Sequelize.ARRAY( Sequelize.INTEGER )),
		address			: Sequelize.STRING,
		name			: Sequelize.STRING,
		drinkSpecials	: Sequelize.STRING,
		foodSpecials	: Sequelize.STRING,
		image           : Sequelize.STRING,
		website			: Sequelize.STRING
	});

	return model;
};