const sendSMS = require('./sms/index')
const getAccount = require('./db/getAccount.js')
const updateAddressBalance = require('./db/updateAddressBalance.js')
const pay = require('./web3/pay.js')
const Bluebird = require('bluebird')

const sendTransaction = ({ socket }) => ({
  req, res, telephone, message
}) => {
  const [ unusedVar, unFormattedTelephone, unformattedAmount ] = message.split(' ')
  const amount = Number(unformattedAmount) * 100
  const toTelephone = `44${unFormattedTelephone.slice(unFormattedTelephone.indexOf(7))}`.replace(/ /g, '')
  const fromTelephone = telephone.replace('+', '')
  return Bluebird.props({
    fromAccount: getAccount({ telephone: fromTelephone }),
    toAccount: getAccount({ telephone: toTelephone })
  })
  .then(({ fromAccount, toAccount }) => {
    console.log({ fromAccount, toAccount })
    // 1. Check balance of ETH wallet (check if balance sufficient)
    if (!fromAccount || !fromAccount.address) {
      return sendSMS(telephone, `You do not have an account yet. Create one by sending 'create' to this number`)
    }
    if (!fromAccount.balance || fromAccount.balance < Number(amount)) {
      return sendSMS(telephone, `Not enough balance. Your balance is ${(fromAccount.balance / 100).toFixed(2)}`)
    }
    if (!toAccount || !toAccount.address) {
      return sendSMS(telephone, 'You tried to send to a number that is not registered with PGKT yet!')
    }
    // 2. Send ETH from one wallet to the other
    return pay({
      fromAddress: fromAccount.address,
      toAddress: toAccount.address,
      amount: amount,
      privateKey: fromAccount.private_key
    })
    .then(({ hash }) => {
      const newFromAccountBalance = Number(fromAccount.balance) - amount
      const newToAccountBalance = Number(toAccount.balance) + amount
      // 3. Update both DB entries to reflect new balances
      return Bluebird.props({
        updatedFromAccount: updateAddressBalance({ privateKey: fromAccount.private_key, balance: newFromAccountBalance }),
        updatedToAccount: updateAddressBalance({ privateKey: toAccount.private_key, balance: newToAccountBalance }),
        hash
      })
    })
    .then(({ updatedFromAccount, updatedToAccount, hash }) => {
      // 4. Send success SMS to both numbers stating new balance.
      socket.emit('transactionMade',
        `+${updatedToAccount.telephone}`,
        'Payment made',
        (amount / 100).toFixed(2),
        new Date()
      )
      return Bluebird.props({
        sentFromAccountSMS: sendSMS(
          telephone,
          `You paid ${(amount / 100).toFixed(2)}KT to +${toTelephone} (tx hash: ${hash}). New balance is ${(updatedFromAccount.balance / 100).toFixed(2)}`
        ),
        sentToAccountSMS: sendSMS(
          `+${toTelephone}`,
          `You received ${(amount / 100).toFixed(2)}KT from ${telephone} (tx hash: ${hash}). New balance is ${(updatedToAccount.balance / 100).toFixed(2)}`
        )
      })
    })
    .then((res) => {
      res.set('Content-Type', 'text/xml')
      res.send(`
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
        </Response>
      `)
    })
  })
  .catch(console.error)
}

module.exports = sendTransaction
