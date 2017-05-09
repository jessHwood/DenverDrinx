var db = require('../models');
var Bar = db.models.Bar;

function index(req, res){
	res.json({message : "this is the index"});
}

module.exports = {
	index : index
};