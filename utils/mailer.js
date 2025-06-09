const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.sendWelcomeEmail = (email, name) => {
  transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Welcome to Admin Panel',
    text: `Hello ${name},\n\nWelcome to our platform!`
  });
};
