const index = require('./index');
const post = require('./post');
const profile = require('./profile');


const routes = (app) => {
  app.use('/', index);
  app.use('/posts', post);
  app.use('/profile', profile);
};

module.exports = routes;
