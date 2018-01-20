const call = require('./index');

const sendTransaction = ({
  req, res, telephone, message,
}) => {
  // 1. Check balance of ETH wallet (check if balance sufficient)
  // 2. Send ETH from one wallet to the other
  // 3. Update both DB entries to reflect new balances
  // 3. Send success SMS to both numbers stating new balance.
  call(telephone, 'testing transaction');
  res.send('transaction');
};

module.exports = sendTransaction;

