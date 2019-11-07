const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

const app = require('./app');
const mail = require('./src/mail');
const { APPOINTMENT, CONTACT_US } = require('./src/constants');

admin.initializeApp();

exports.handleContactUs = functions.https.onRequest((req, res) => {
  cors(req, res, () => mail.send(req.body.data, CONTACT_US));
});

exports.handleAppointments = functions.https.onRequest((req, res) => {
  cors(req, res, () => mail.send(req.body.data, APPOINTMENT));
});

exports.healthcheck = functions.https.onRequest(app);
