var express = require('express');
var app = express();
var auth = require('./server/resources/auth');
var router = require('./server/config/routes.js');
var bodyParser = require('body-parser');

// require and load dotenv
// require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);


//serve static files to public folder
app.use(express.static('public'));
app.use(function(req, res){
	//link to bootsrapt template?
   res.sendFile(__dirname + '/public/index.html');
});

// // require SQL User
// var sqlUser = require('./server/models/index');


//LISTEN ON LOCAL HOST 3000
app.listen(3000, function() {
	console.log("Listening on localhost:3000");
});