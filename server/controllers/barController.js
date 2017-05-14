var db = require('../models');
var Bar = db.models.Bar;

function index(req, res){
	console.log('index');
	Bar.findAll()
		.then(function(bars){
			res.json(bars);
		});
}

function show(req, res){
	console.log(req.params.id);
	Bar.findById(req.params.id)
		.then(function(bar){
			if(!bar) return error(res, "not found");
			res.json(bar);
		});
}

module.exports = {
	index : index,
	show : show
};