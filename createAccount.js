const sendSMS = require('./sms/index');

const createAccount = ({ req, res, telephone }) => {
  // 1. Create ETH wallet
  // 2. Create DB entry linking phone to ETH wallet
  // 3. Transfer 5 KT into new ETH wallet
  // 3. Reply with success SMS stating new balance
  sendSMS(telephone, 'Your account has been created with 5KT in it');
  res.set('Content-Type', 'text/xml')
  res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
    </Response>
  `);
};

module.exports = createAccount;
