var express = require('express');
var app = express();
var auth = require('./server/resources/auth');
var router = require('./server/config/routes.js');
var bodyParser = require('body-parser');

// require and load dotenv
require('dotenv').load();

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

// require SQL User
var sqlUser = require('./server/models/index');

/* SQL API Routes */

app.get('/api/me', auth.ensureAuthenticated, function (req, res) {
  sqlUser.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    res.send(user);
  });
});

app.put('/api/me', auth.ensureAuthenticated, function (req, res) {
  sqlUser.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.save().then(function(result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }      
      res.send(result);
    });
  });
});

/* SQL Auth Routes */

app.post('/auth/signup', function (req, res) {
  sqlUser.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = sqlUser.build({
      displayName: req.body.displayName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    user.save().then(function (result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }
      res.send({ token: auth.createJWT(result) });
    });
  });
});

app.post('/auth/login', function (req, res) {
  sqlUser.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (!existingUser) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    var validPassword = existingUser.comparePassword(req.body.password);
    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    res.send({ token: auth.createJWT(existingUser) });
  });
});

/*
//  * Catch All Route
//  */
app.get(['/', '/signup', '/login', '/profile'], function (req, res) {
  res.render('index');
});


//LISTEN ON LOCAL HOST 3000
app.listen(3000, function() {
	console.log("Listening on localhost:3000");
});