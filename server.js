var express = require('express');
var app = express();
var router = require('./server/config/routes.js');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

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
app.listen(port, function() {
	console.log("Listening on localhost" + port);
});