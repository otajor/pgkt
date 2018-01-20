module.exports = (req, res) => {
  const { fromTelephone, message } = req.body
  if (!message) {
    return res.send('error')
  }
  if (message.match(/^create.*/)) {
    return createAccount({ req, res, telephone: fromTelephone })
  }
  if (message.match(/^balance.*/)) {
    return checkBalance({ req, res, telephone: fromTelephone })
  }
  if (message.match(/^pay.*/)) {
    return sendTransaction({ req, res, telephone: fromTelephone, message: message })
  }
  return res.send('error')
}

const createAccount = ({ req, res, telephone }) => {
  res.send('success')
}

const checkBalance = ({ req, res, telephone }) => {
  res.send('success')
}

const sendTransaction = ({ req, res, telephone, message }) => {
  res.send('success')
}
