module.exports = (req, res) => {
  const { Body: message, From: telephone } = req.body
  console.log(req.body, "<<<<<<<<<<<<< BODY")
  if (!message) {
    return res.send('error')
  }
  if (message.match(/^create.*/)) {
    return createAccount({ req, res, telephone })
  }
  if (message.match(/^balance.*/)) {
    return checkBalance({ req, res, telephone })
  }
  if (message.match(/^pay.*/)) {
    return sendTransaction({ req, res, telephone, message: message })
  }
  return res.send('error')
}

const createAccount = ({ req, res, telephone }) => {
  // 1. Create ETH wallet
  // 2. Create DB entry linking phone to ETH wallet
  // 3. Transfer 5 KT into new ETH wallet
  // 3. Reply with success SMS stating new balance
  res.send('success')
}

const checkBalance = ({ req, res, telephone }) => {
  // 1. Retrieve balance of ETH wallet
  // 2. Reply with success SMS stating balance
  res.send('success')
}

const sendTransaction = ({ req, res, telephone, message }) => {
  // 1. Check balance of ETH wallet (check if balance sufficient)
  // 2. Send ETH from one wallet to the other
  // 3. Update both DB entries to reflect new balances
  // 3. Send success SMS to both numbers stating new balance.
  res.send('success')
}
