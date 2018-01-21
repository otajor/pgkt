const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://109.74.198.186:8888'))
const abiArray = require('./abi.js')
const contractAddress = '0xA57E2B345035958A3A0deF232a73b3d2c4869Dca'
const pgktContract = web3.eth.contract(abiArray)
const pgktContractInstance = pgktContract.at(contractAddress)

module.exports = { web3, pgktContractInstance }
