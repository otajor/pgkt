const knex = require('./client.js')

const createEthAddress = ({ privateKey, address }) =>
  knex('eth_addresses')
  .returning('*')
  .insert({
    address: address,
    private_key: privateKey
  })
  .catch(console.log)

module.exports = createEthAddress
