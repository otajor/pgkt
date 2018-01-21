module.exports = ({ socket }) => {
  const createAccount = require('../createAccount')({ socket })
  const checkBalance = require('../checkBalance')({ socket })
  const sendTransaction = require('../sendTransaction')({ socket })

  return (req, res) => {
    const { Body: message, From: telephone } = req.body
    console.log(req.body, '<<<<<<<<<<<<< BODY')
    if (!message) {
      return res.send('error')
    }
    if (message.match(/^create.*/i)) {
      return createAccount({ req, res, telephone })
    }
    if (message.match(/^balance.*/i)) {
      return checkBalance({ req, res, telephone })
    }
    if (message.match(/^pay.*/i)) {
      return sendTransaction({
        req, res, telephone, message
      })
    }
    return res.send('error')
  }
}
