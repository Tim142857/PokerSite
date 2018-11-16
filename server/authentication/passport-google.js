require('rootpath')();
var passport = require('passport');
var GoogleStrategy   = require( 'passport-google-oauth2' ).Strategy;
var UserManager = require('server/managers/UserManager');

const GOOGLE_CLIENT_ID = "632055118455-q9a5bomebgtmmu50a483m7hbpgcu6u3f.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "pyCk1f9xwbhzaYuIX07QLoRG";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/login/google/return",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    UserManager.findOrCreateUser('GOOGLE', profile)
    .then(user => {
      return done(null, user);
    })
  });
}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
