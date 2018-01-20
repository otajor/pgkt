const sendSMS = require('./sms/index')
const fetchUnusedAddress = require('./db/fetchUnusedAddress.js')
const updateAddress = require('./db/updateAddress.js')
const requestAccount = require('./blockchain/requestAccount.js')

const createAccount = ({ req, res, telephone }) => {
  const telephoneInt = telephone.replace('+', '')
  return fetchUnusedAddress()
    .then(({ address, privateKey }) => {
      console.log('GOT ADDRESS: ', { address, privateKey })
      return requestAccount({ address, privateKey, telephone: telephoneInt })
      .then((hash) => {
        console.log('GOT ACCOUNT: ', hash)
        return updateAddress({ privateKey, telephone: telephoneInt })
      })
      .then((res) => {
        console.log('UPDATEDD ADDRESS: ', res)
        sendSMS(telephoneInt, 'Your account has been created with 5KT in it')
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
