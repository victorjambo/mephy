const homeRouter = require('./Home');

const routes = (app) => {
  app.use('/', homeRouter);
  return app;
};

module.exports = routes;
