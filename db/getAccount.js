const knex = require('./client.js')

const checkBalance = ({ telephone }) =>
  knex('accounts')
  .select('*')
  .innerJoin(
    'eth_addresses',
    'eth_addresses.account_id', '=', 'accounts.id'
  )
  .where({ telephone })
  .then((res) => res[0])
  .catch(console.log)

module.exports = checkBalance
