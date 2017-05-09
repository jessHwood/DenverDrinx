var db = require('../models');
var Bar = db.models.Bar;

function index(req, res){
	Bar.findAll()
		.then(function(bars){
			res.json(bars);
		});
}

module.exports = {
	index : index
};