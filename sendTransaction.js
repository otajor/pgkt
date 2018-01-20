const sendSMS = require('./sms/index');

const sendTransaction = ({
  req, res, telephone, message,
}) => {
  // 1. Check balance of ETH wallet (check if balance sufficient)
  // 2. Send ETH from one wallet to the other
  // 3. Update both DB entries to reflect new balances
  // 3. Send success SMS to both numbers stating new balance.
  sendSMS(telephone, 'testing transaction');
  res.set('Content-Type', 'text/xml')
  res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
    </Response>
  `);
};

module.exports = sendTransaction;

