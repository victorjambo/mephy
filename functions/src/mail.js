const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const JSON = require('circular-json');
const { APPOINTMENT, CONTACT_US } = require('./constants');

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().mail.user,
    pass: functions.config().mail.pass
  }
});
let snapshot = {}

exports.send = function(data, type) {
  switch (type) {
    case APPOINTMENT:
      // if (data.id) {
      //   firestore.get({ collection: 'appointments', doc: data.id })
      //     .then(snap => snapshot = snap)
      //     .catch(err => console.log(err));
      // }
      context = {
        type: 'Appointment',
        subject: 'Appointment: Someone has booked an appointment',
        body: 'You have received a new appointment',
        snapshot,
        link: '/'
      }
      break;
    case CONTACT_US:
      // if (data.id) {
      //   firestore.get({ collection: 'contactUs', doc: data.id })
      //     .then(snap => snapshot = snap)
      //     .catch(err => console.log(err));
      // }
      context = {
        type: 'Contact Us',
        subject: 'Contact Us: New message',
        body: 'Someone is trying to contact you',
        snapshot,
        link: '/'
      }
      break;
    default:
      context = {
        type: 'Mephy Mailer',
        subject: 'Mephy: Default',
        body: 'Hello friends, Just checking all is well.',
        snapshot,
        link: '/'
      };
  }

  const { mail: { dest } } = functions.config();

  const mailOptions = {
    from: `Mephy ${context.type} <${functions.config().mail.user}>`,
    to: dest,
    subject: context.subject,
    html: `<p style="font-size: 16px;">${context.body}</p>
      <br />
      New ${context.type}`
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(JSON.stringify(error));
      return res.send(error.toString());
    }
    console.log(`Email Sent <${context.type}>`);
    return res.send(`Email Sent <${context.type}>`);
  });
}
