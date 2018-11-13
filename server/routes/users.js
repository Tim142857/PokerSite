require('rootpath')();
var express = require('express');
var router = express.Router();
var isAuthenticated = require('connect-ensure-login').ensureLoggedIn();


router.use('/', isAuthenticated);

/**
* Create user
*
* @section USERS
* @type post
* @url /users
* @param {string} displayName
* @param {string =} firstName
* @param {string =} lastName
* @param {string =} phone
* @param {string =} googleId
* @param {string =} facebookID
* @return {object} user
*/
router.post('/',
function(req, res){
  res.render('profile', { user: req.user });
});


module.exports = router;
