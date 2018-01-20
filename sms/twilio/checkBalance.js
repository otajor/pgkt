const call = require('./index');

const checkBalance = ({ req, res, telephone }) => {
  // 1. Retrieve balance of ETH wallet
  // 2. Reply with success SMS stating balance
  call(telephone, 'Your balance: $$$$');
  res.send('check balance');
};

module.exports = checkBalance;
