const index = require('./index');
const users = require('./users');
const login = require('./login');
const signUp = require('./sign_up');
const post = require('./post');


const routes = (app) => {
  app.use('/', index);
  app.use('/users', users);
  app.use('/login', login);
  app.use('/sign_up', signUp);
  app.use('/posts', post);
};

module.exports = routes;
