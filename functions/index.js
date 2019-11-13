const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const { healthcheck, appointments, contactUs, routes } = require('./src/routes');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
routes(app);

exports.api = functions.https.onRequest(app);

exports.handleContactUs = functions.https.onRequest(contactUs);

exports.handleAppointments = functions.https.onRequest(appointments);

exports.healthcheck = functions.https.onRequest(healthcheck);
