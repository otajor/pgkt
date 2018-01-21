const sendSMS = require('./sms/index')
const fetchUnusedAddress = require('./db/fetchUnusedAddress.js')
const updateAddressTelephone = require('./db/updateAddressTelephone.js')
const requestAccount = require('./web3/requestAccount.js')

const createAccount = ({ req, res, telephone }) => {
  const telephoneInt = telephone.replace('+', '')
  return fetchUnusedAddress()
    .then(({ address, privateKey }) => {
      return requestAccount({ address, privateKey, telephone: telephoneInt })
      .then((hash) => {
        return updateAddressTelephone({ privateKey, telephone: telephoneInt, balance: 500 })
      })
      .then((res) => {
        sendSMS(telephoneInt, 'Your account has been created! Balance is 5.00KT')
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

module.exports = createAccount
