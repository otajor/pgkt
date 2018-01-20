const knex = require('./client.js')

const getAccount = ({ telephone }) =>
  knex('eth_addresses')
  .select('*')
  .where({ telephone })
  .then((res) => res[0])
  .catch(console.log)

module.exports = getAccount
