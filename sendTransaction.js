const sendSMS = require('./sms/index')
const getAccount = require('./db/getAccount.js')
const updateAddressBalance = require('./db/updateAddressBalance.js')
const pay = require('./web3/pay.js')
const Bluebird = require('bluebird')

const sendTransaction = ({ socket }) => ({
  req, res, telephone, message,
}) => {
  const [ send, unFormattedTelephone, unformattedAmount ] = message.split(' ')
  console.log(message, '<<< MESSAGE BEFORE SPLITTING')
  console.log(send, unFormattedTelephone, unformattedAmount, '<<<<<<<<<<<< MESSAGE AFTER SPLITTING')
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
      return sendSMS(telephone, `Please set up an account before paying: send 'create' to this number`)
    }
    if (!fromAccount.balance || fromAccount.balance < Number(amount)) {
      return sendSMS(telephone, 'Balance insufficient')
    }
    if (!toAccount || !toAccount.address) {
      return sendSMS(telephone, 'Cannot send to this number (no address)')
    }
    // 2. Send ETH from one wallet to the other
    console.log('PAYING WITH ', {
      fromAddress: fromAccount.address,
      toAddress: toAccount.address,
      amount: amount,
      privateKey: fromAccount.private_key
    })
    return pay({
      fromAddress: fromAccount.address,
      toAddress: toAccount.address,
      amount: amount,
      privateKey: fromAccount.private_key
    })
    .then(({ hash }) => {
      console.log('GOT HASH!', hash)
      const newFromAccountBalance = Number(fromAccount.balance) - amount
      const newToAccountBalance = Number(toAccount.balance) + amount
      // 3. Update both DB entries to reflect new balances
      return Bluebird.props({
        updatedFromAccount: updateAddressBalance({ privateKey: fromAccount.private_key, balance: newFromAccountBalance }),
        updatedToAccount: updateAddressBalance({ privateKey: toAccount.private_key, balance: newToAccountBalance })
      })
    })
    .then(({ updatedFromAccount, updatedToAccount }) => {
      console.log('UPDATED ACCOUNTS', { updatedFromAccount, updatedToAccount })
      // 4. Send success SMS to both numbers stating new balance.
      socket.emit('transactionMade',
        `+${updatedToAccount.telephone}`,
        'Payment made',
        (amount / 100).toFixed(2),
        new Date()
      )
      return Bluebird.props({
        sentFromAccountSMS: sendSMS(telephone, `You paid ${(amount / 100).toFixed(2)}KT to +${toTelephone}. New balance is ${(updatedFromAccount.balance / 100).toFixed(2)}`),
        sentToAccountSMS: sendSMS(`+${toTelephone}`, `You received ${(amount / 100).toFixed(2)}KT from ${telephone}. New balance is ${(updatedToAccount.balance / 100).toFixed(2)}`)
      })
    })
    .then((res) => {
      console.log('sent SMS!!')
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

sendTransaction({ socket: { emit: () => {} } })({
  req: {}, res: { set: () => {}, send: () => {} }, telephone: '+447772899770', message: 'pay 07429507797 1.5'
})

module.exports = sendTransaction
