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

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

module.exports = router;