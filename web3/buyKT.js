const { pgktContractInstance, web3 } = require('./web3Client.js')
const Tx = require('ethereumjs-tx')
const CONTRACT_ADDRESS = '0x2A44b6A77584D64dd4616917183b3761F43162Ca'

const buyKT = ({ address, privateKey, amount }) => {
  return new Promise((resolve, reject) => {
    const callData = pgktContractInstance.buyKT.getData(amount)
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
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

module.exports = buyKT
