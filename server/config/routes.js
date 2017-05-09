var express = require('express');
var router = express.Router();
//require controllers
var barController = require('../controllers/barController');

router.get('/', function(req, res){
	console.log('main page just hit .get()');
	res.send('welcome to the place');
});

router.get('/api/index', barController.index);


module.exports = router;