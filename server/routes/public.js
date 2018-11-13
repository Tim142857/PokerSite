require('rootpath')();
var express = require('express');
var router = express.Router();
var passport = require('passport');
var Jwt = require('server/authentication/jwt');



router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', user: req.user });
});

/**
* Login
*
* @section PUBLIC
* @type get
* @url /login
*/
router.get('/login',
function(req, res){
  res.render('login');
});

router.get('/login/google',
passport.authenticate('google', { scope:
  [ 'email', 'profile' ] }
));

router.get('/login/google/return',
passport.authenticate( 'google', { failureRedirect: '/login' }),
function(req, res){
  let token = Jwt.generateToken(req.user);
  res.send(token);
  // res.redirect('/');
});

router.get('/login/facebook',
passport.authenticate('facebook'));

router.get('/login/facebook/return',
passport.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/');
});

router.get('/logout',
function(req, res){
  req.session.destroy();
  res.render('login');
});

module.exports = router;
