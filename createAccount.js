const sendSMS = require('./sms/index')
const fetchUnusedAddress = require('./db/fetchUnusedAddress.js')
const updateAddress = require('./db/updateAddress.js')
const requestAccount = require('./blockchain/requestAccount.js')

const createAccount = ({ req, res, telephone }) => {
  return fetchUnusedAddress()
    .then(({ address, privateKey }) => {
      return requestAccount({ address, privateKey, telephone })
      .then((hash) => {
        return updateAddress({ privateKey, telephone })
      })
      .then((res) => {
        sendSMS(telephone, 'Your account has been created with 5KT in it')
        res.set('Content-Type', 'text/xml')
        res.send(`
          <?xml version="1.0" encoding="UTF-8"?>
          <Response>
          </Response>
        `)
      })
    })
    .catch(console.log)
}

module.exports = createAccount
