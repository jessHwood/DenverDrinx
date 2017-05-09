var express = require('express');
var router = express.Router();
//require controllers
var barController = require('../controllers/barController');

//testing router for homepage
router.get('/', function(req, res){
	console.log('main page just hit .get()');
	res.send('welcome to the main place');
});

//bar routes
router.get('/api/bars/index', barController.index);


module.exports = router;