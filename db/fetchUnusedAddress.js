const knex = require('./client.js')

const fetchUnusedAddress = () =>
  knex('eth_addresses')
  .select(['address', 'private_key'])
  .whereNull('telephone')
  .then((res) => res[0])
  .then(({ address, private_key }) => ({ address: address, privateKey: private_key }))
  .catch(console.log)

module.exports = fetchUnusedAddress
