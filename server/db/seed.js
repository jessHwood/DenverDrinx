var DB = require("../models").models;

var barArray = [
	//bar info as objects
	{test: "testValue2"},
	{test : "testmonkey"}
];

//create things in pSQL
var barCreate = function(bar){
	return DB.Bar.create({ 
		test : bar.test 
	});
};

barArray.forEach(function(bar){
		barCreate(bar);
	});