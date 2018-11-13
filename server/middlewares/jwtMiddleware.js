require('rootpath')();
const Jwt = require('server/authentication/jwt');

module.exports = Jwt.verifyToken;
