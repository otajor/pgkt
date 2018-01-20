const knex = require('./client.js')

const getAllData = () =>
  knex('eth_addresses')
  .select('*')
  .catch(console.log)

module.exports = getAllData
