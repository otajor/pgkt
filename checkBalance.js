const sendSMS = require('./sms/index');
const retrieveBalance = require('./web3/retrieveBalance.js')
const getAccount = require('./db/getAccount.js')

const checkBalance = ({ req, res, telephone }) => {
  // 1. Retrieve balance of ETH wallet
  getAccount({ telephone })
  .then((res) => {
    return retrieveBalance(res.address)
  })
  .then((res) => {
    sendSMS(telephone, 'Your balance: $$$$');
    res.set('Content-Type', 'text/xml')
    res.send(`
      <?xml version="1.0" encoding="UTF-8"?>
      <Response>
      </Response>
    `);
  })
};

module.exports = checkBalance;
