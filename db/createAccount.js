const knex = require('./client.js')

const createAccount = ({ telephone, balance = 0, accountAddress }) =>
  knex('accounts')
  .returning('*')
  .insert({
    telephone: telephone,
    balance: balance,
    account_address: accountAddress
  })
  .catch(console.log)

module.exports = createAccount
