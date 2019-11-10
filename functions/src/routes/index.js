const healthcheck = require('./Healthcheck');
const { appointments, contactUs } = require('./Mailer');
const products = require('./Products');
const anatomies = require('./Anatomies');
const anatomyTypes = require('./AnatomyTypes');
const brands = require('./Brands');
const categories = require('./Categories');
const users = require('./Users');

module.exports = {
  healthcheck,
  appointments,
  contactUs,
  routes: (app) => {
    app.use(products);
    app.use(anatomies);
    app.use(anatomyTypes);
    app.use(brands);
    app.use(categories);
    app.use(users);
    return app;
  }
};
