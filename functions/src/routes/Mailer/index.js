const cors = require('cors')({origin: true});
const mail = require('../../helpers/mail');

const { APPOINTMENT, CONTACT_US } = require('../../helpers/constants');


exports.appointments = function(req, res) {
  return cors(req, res, () => mail.send(req.body.data, APPOINTMENT));
}

exports.contactUs = function(req, res) {
  return cors(req, res, () => mail.send(req.body.data, CONTACT_US));
};
