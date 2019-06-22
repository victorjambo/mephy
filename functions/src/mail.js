const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const JSON = require('circular-json');
const { APPOINTMENT, CONTACT_US } = require('./constants');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().mail.user,
    pass: functions.config().mail.pass
  }
});

exports.send = function(data, type) {
  switch (type) {
    case APPOINTMENT:
      context = {
        type: 'Mephy Appointment',
        subject: 'Appointment: Someone has booked an appointment',
        body: 'You have received a new appointment',
        link: '/'
      }
      break;
    case CONTACT_US:
      context = {
        type: 'Mephy Contact Us',
        subject: 'Contact Us: New message',
        body: 'Someone is trying to contact you',
        link: '/'
      }
      break;
    default:
      context = {
        type: 'Mephy Mailer',
        subject: 'Mephy: Default',
        body: 'Hello friends, Just checking all is well.',
        link: '/'
      };
  }

  const { mail: { dest } } = functions.config();

  const mailOptions = {
    from: `${context.type} <${functions.config().mail.user}>`,
    to: dest,
    subject: context.subject,
    html: `<p style="font-size: 16px;">${context.body}</p>
      ${JSON.stringify(data)}
      <br />
      <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error.toString());
      return res.send(error.toString());
    }
    console.log(`Email Sent <${context.type}>`);
    return res.send(`Email Sent <${context.type}>`);
  });
}
