const { ACCOUNT_SID, AUTHTOKEN } = require('../../config.env');

const twilio = require('twilio');

console.log('account', ACCOUNT_SID, AUTHTOKEN);

const client = new twilio(ACCOUNT_SID, AUTHTOKEN);

client.messages.create({
  body: 'Hello from Node',
  to: '+447429507797', // Text this number
  from: '+441282570032', // From a valid Twilio number
}, (err, res) => {
  console.log(err, res);
});
