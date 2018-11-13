require('rootpath')();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var UserManager = require('server/managers/UserManager');

const CLIENT_ID = "180216022928024";
const CLIENT_SECRET = "bec31eb710f06bc38d63f9550378597c";

passport.use(new FacebookStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/login/facebook/return'
},
async function(accessToken, refreshToken, profile, cb) {
  var user = await UserManager.findOrCreateUser('FACEBOOK', profile);
  return cb(null, user);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
