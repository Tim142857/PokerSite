require('rootpath')();
var passport = require('passport');
var GoogleStrategy   = require( 'passport-google-oauth2' ).Strategy;
var UserManager = require('server/managers/UserManager');

const GOOGLE_CLIENT_ID = "632055118455-fnd9jb8ps0r9enari9vf4eq6pfkcvu9g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "PWltPUOXbFPqE1mBmMz1R4dS";

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
