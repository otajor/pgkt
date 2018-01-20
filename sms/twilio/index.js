const { ACCOUNT_SID, AUTHTOKEN } = require('../../config.env');

const SID = process.env.SID || ACCOUNT_SID;

const TOKEN = process.env.TOKEN || AUTHTOKEN;

const twilio = require('twilio');

const client = new twilio(SID, TOKEN);

const call = (to, body) => {
  client.messages.create({
    body,
    to, // Text this number
    from: '+441282570032', // From a valid Twilio number
  })
    .then(message => console.log(message))
    .catch(err => console.log(err));
};

module.exports = call;
