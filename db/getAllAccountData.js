const knex = require('./client.js')

const getAllData = () =>
  knex('eth_addresses')
  .select([
    'address',
    'telephone',
    'balance'
  ])
  .catch(console.log)

module.exports = getAllData
