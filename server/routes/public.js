require('rootpath')();
var express = require('express');
var router = express.Router();
var passport = require('passport');
var Jwt = require('server/authentication/jwt');
var UserManager = require('server/managers/UserManager')



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

router.post('/login/google',
async function(req, res){
  var user = await UserManager.findOrCreateUser('GOOGLE', JSON.parse(req.body.user));
  let token = Jwt.generateToken(user);
  res.send(token);
})

router.get('/login/google/return',
passport.authenticate( 'google', { failureRedirect: '/login' }),
function(req, res){
  let token = Jwt.generateToken(req.user);
  res.send({token: token});
});

router.get('/login/facebook',
passport.authenticate('facebook'));

router.post('/login/facebook',
async function(req, res){
  var user = await UserManager.findOrCreateUser('FACEBOOK', JSON.parse(req.body.user));
  let token = Jwt.generateToken(user);
  res.send(token);
})

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
