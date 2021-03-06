const sendSMS = require('./sms/index')
const fetchUnusedAddress = require('./db/fetchUnusedAddress.js')
const updateAddressTelephone = require('./db/updateAddressTelephone.js')
const getAccount = require('./db/getAccount.js')
const updateAddressBalance = require('./db/updateAddressBalance.js')
const requestAccount = require('./web3/requestAccount.js')
const Bluebird = require('bluebird')

const createAccount = ({ socket }) => ({ req, res, telephone }) => {
  const telephoneInt = telephone.replace('+', '')
  return getAccount({ telephone: telephoneInt })
  .then((account) => {
    if (account && account.telephone) {
      return sendSMS(telephoneInt, 'You already have an account!')
    }
    return fetchUnusedAddress()
      .then(({ address, privateKey }) => {
        return requestAccount({ address, privateKey, telephone: telephoneInt })
        .then((hash) => {
          return Bluebird.props({
            telephone: updateAddressTelephone({ privateKey, telephone: telephoneInt }),
            balance: updateAddressBalance({ privateKey, balance: 500 })
          })
        })
        .then(() => {
          sendSMS(telephoneInt, `Your account (address: ${address}) has been created! Balance is 5.00KT`)
          res.set('Content-Type', 'text/xml')
          res.send(`
            <?xml version="1.0" encoding="UTF-8"?>
            <Response>
            </Response>
          `)
        })
      })
  })
  .catch(console.error)
}

module.exports = createAccount
