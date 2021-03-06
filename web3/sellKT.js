const { pgktContractInstance, web3 } = require('./web3Client.js')
const Tx = require('ethereumjs-tx')

const sellKT = ({ address, value, privateKey }) => {
  return new Promise((resolve, reject) => {
    const callData = pgktContractInstance.methods.sellKT.getData(address)
    const nonceHex = web3.toHex(web3.eth.getTransactionCount(address))
    const gasPrice = web3.eth.gasPrice
    const gasPriceHex = web3.toHex(gasPrice)
    const gasLimitHex = web3.toHex(300000)
    // create signed transaction
    const rawTx = {
      nonce: nonceHex,
      gasPrice: gasPriceHex,
      gasLimit: gasLimitHex,
      to: toAddress,
      from: address,
      value: '0x00',
      data: callData
    }
    const tx = new Tx(rawTx)
    tx.sign(privateKey)
    const serializedTx = tx.serialize()
    web3.eth.sendRawTransaction(serializedTx.toString('hex'), (err, hash) => {
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


module.exports = sellKT
