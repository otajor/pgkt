const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.53.198:8888'))
const abiArray = require('./abi.js')
const contractAddress = '0x2A44b6A77584D64dd4616917183b3761F43162Ca'
const pgktContract = web3.eth.contract(abiArray)
const pgktContractInstance = pgktContract.at(contractAddress)

module.exports = { web3, pgktContractInstance }
