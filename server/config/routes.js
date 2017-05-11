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

var db = require('../models');
var auth = require('./auth');

//user routes
router.get('/api/me', auth.ensureAuthenticated, function (req, res) {
  db.models.User.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    console.log(user);
    res.send(user);
  });
});

router.put('/api/me', auth.ensureAuthenticated, function (req, res) {
  db.models.User.findById(req.user).then(function (user) {
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

router.post('/auth/signup', function (req, res) {
  db.models.User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = db.models.User.build({
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

router.post('/auth/login', function (req, res) {
  db.models.User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
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



module.exports = router;