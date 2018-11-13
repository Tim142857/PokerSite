require('rootpath')();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passportFb = require('server/authentication/passport-facebook');
var passportGoogle = require('server/authentication/passport-google');
var sequelize = require('server/models/config.js');

var publicRouteur = require('server/routes/public');
var usersRouter = require('server/routes/users');
var clubsRouteur = require('server/routes/clubs');
var tournamentsRouteur = require('server/routes/tournaments');

var passport = require('passport');
// var Strategy = require('passport-facebook').Strategy;

var bodyParser = require('body-parser');
// var multer = require('multer');


var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());

app.use('/', publicRouteur);
app.use('/users', usersRouter);
app.use('/clubs', clubsRouteur);
app.use('/tournaments', tournamentsRouteur);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
