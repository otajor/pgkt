const { SID, TOKEN } = process.env;

const twilio = require('twilio');

const client = new twilio(SID, TOKEN);

console.log(SID, TOKEN);

const sendSMS = (to, body) => {
  client.messages.create({
    body,
    to, // Text this number
    from: '+441282570032', // From a valid Twilio number
  })
    .then(message => console.log(message))
    .catch(err => console.log(err));
};

module.exports = sendSMS;
