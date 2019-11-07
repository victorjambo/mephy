const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { healthcheck, appointments, contactUs } = require('./src/routes');

admin.initializeApp();

exports.handleContactUs = functions.https.onRequest(contactUs);

exports.handleAppointments = functions.https.onRequest(appointments);

exports.healthcheck = functions.https.onRequest(healthcheck);
