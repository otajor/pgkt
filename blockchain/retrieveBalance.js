const { pgktContractInstance } = require('./web3Client.js')

module.exports = ({ ethAddress }) => pgktContractInstance.retrieveBalance(ethAddress)