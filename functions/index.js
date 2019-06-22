const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const mail = require('./src/mail');
const { APPOINTMENT, CONTACT_US } = require('./src/constants');

admin.initializeApp();

exports.handleContactUs = functions.https.onRequest((req, res) => {
  cors(req, res, () => mail.send(CONTACT_US));
});

exports.handleAppointments = functions.https.onRequest((req, res) => {
  cors(req, res, () => mail.send(APPOINTMENT));
});
