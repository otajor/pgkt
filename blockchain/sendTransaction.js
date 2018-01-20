const { pgktContractInstance, web3 } = require('./web3Client.js')
const Tx = require('ethereumjs-tx')

const pay = ({ fromAddress, toAddress, value, privateKey }) => {
  return new Promise((resolve, reject) => {
    const callData = pgktContractInstance.methods.pay.getData(fromAddress)
    const nonceHex = web3.toHex(web3.eth.getTransactionCount(fromAddress))
    const gasPrice = web3.eth.gasPrice
    const gasPriceHex = web3.toHex(gasPrice)
    const gasLimitHex = web3.toHex(300000)

    const rawTx = {
      nonce: nonceHex,
      gasPrice: gasPriceHex,
      gasLimit: gasLimitHex,
      to: toAddress,
      from: fromAddress,
      value: '0x00',
      data: callData
    }
    const tx = new Tx(rawTx)
    tx.sign(privateKey)
    const serializedTx = tx.serialize()
    web3.eth.sendRawTransaction(serializedTx.toString('hex'), function (err, hash) {
      if (err) {
        console.log('Error:')
        console.log(err)
      } else {
        console.log('Transaction receipt hash pending')
        console.log(hash)
      }
    })
  })
}

module.exports = pay
