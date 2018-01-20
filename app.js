// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()

// const path = require('path')
// const webhookHandler = require('./routes/webhook.js')
// const getAllDataHandler = require('./routes/getAllAccountData.js')

// // Middleware
// app.use(bodyParser.urlencoded({extended: false}))

// // Routes
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))
// app.get('/get-all-account-data', getAllDataHandler)
// app.post('/webhook', webhookHandler)

// app.listen(process.env.PORT || 4000, () => console.log('Example app listening on port 4000!'))


const { pgktContractInstance, web3 } = require('./web3Client.js')
const Tx = require('ethereumjs-tx')
const CONTRACT_ADDRESS = '0x2A44b6A77584D64dd4616917183b3761F43162Ca'

const requestAccount = ({ address, privateKey, telephone }) => {
  console.log(address, privateKey, telephone, '<<<<<<<<<<<<<<<< REQUESTING ACCOUNT')
  return new Promise((resolve, reject) => {
    const callData = pgktContractInstance.requestAccount.getData(telephone)
    const nonceHex = web3.toHex(web3.eth.getTransactionCount(address))
    const gasPrice = web3.eth.gasPrice
    const gasPriceHex = web3.toHex(gasPrice)
    const gasLimitHex = web3.toHex(300000)
    // create signed transaction
    const rawTx = {
      nonce: nonceHex,
      gasPrice: gasPriceHex,
      gasLimit: gasLimitHex,
      to: CONTRACT_ADDRESS,
      from: address,
      value: '0x00',
      data: callData
    }
    const tx = new Tx(rawTx)
    tx.sign(Buffer.from(privateKey, 'hex'))
    const serializedTx = tx.serialize()
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
      console.log(err, '<<<<<<<< ERROR ')
      console.log(hash, '<<<<<<<<<< HASH')
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

requestAccount({
  address: '0x9177f91f12a81ef2552be75c9cda3accef689e20',
  privateKey: '4081bc5523e6721c9c341d3d74f8431bec363ed7e211cf318bc906daa8499821',
  telephone: '447772899770'
})