const config = require('../config');
const User = require('./controllers/user');
const jwt = require('express-jwt');


let jwtCheck = jwt({
  secret: config.jwt.secret
});

module.exports = (app) => {
  app.post('/v1/user/createUser', User.createUser);
  app.post('/v1/user/login', User.login);

}
