const { pgktContractInstance, web3 } = require('./web3Client.js')
const Tx = require('ethereumjs-tx')
const CONTRACT_ADDRESS = '0x2A44b6A77584D64dd4616917183b3761F43162Ca'

const pay = ({ fromAddress, toAddress, amount, privateKey }) => {
  return new Promise((resolve, reject) => {
    const callData = pgktContractInstance.pay.getData(toAddress, amount)
    const nonceHex = web3.toHex(web3.eth.getTransactionCount(fromAddress))
    const gasPrice = web3.eth.gasPrice
    const gasPriceHex = web3.toHex(gasPrice)
    const gasLimitHex = web3.toHex(300000)

    const rawTx = {
      nonce: nonceHex,
      gasPrice: gasPriceHex,
      gasLimit: gasLimitHex,
      to: CONTRACT_ADDRESS,
      from: fromAddress,
      value: '0x00',
      data: callData
    }
    const tx = new Tx(rawTx)
    tx.sign(Buffer.from(privateKey, 'hex'))
    const serializedTx = tx.serialize()
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

module.exports = pay
