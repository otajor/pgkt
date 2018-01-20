const createAccount = require('../sms/twilio/createAccount');
const checkBalance = require('../sms/twilio/checkBalance');
const sendTransaction = require('../sms/twilio/sendTransaction');

module.exports = (req, res) => {
  const { Body: message, From: telephone } = req.body;
  console.log(req.body, '<<<<<<<<<<<<< BODY');
  if (!message) {
    return res.send('error');
  }
  if (message.match(/^create.*/)) {
    return createAccount({ req, res, telephone });
  }
  if (message.match(/^balance.*/)) {
    return checkBalance({ req, res, telephone });
  }
  if (message.match(/^pay.*/)) {
    return sendTransaction({
      req, res, telephone, message,
    });
  }
  return res.send('error');
};
