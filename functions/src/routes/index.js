const healthcheck = require('./Healthcheck');
const { appointments, contactUs } = require('./Mailer');

module.exports = {
  healthcheck,
  appointments,
  contactUs
};
