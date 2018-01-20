const knex = require('./client.js')

const checkBalance = () =>
  knex('accounts')
  .select('*')
  .innerJoin(
    'eth_addresses',
    'eth_addresses.account_id', '=', 'accounts.id'
  )
  .catch(console.log)

module.exports = checkBalance
