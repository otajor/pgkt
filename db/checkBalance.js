const knex = require('./client.js')

const checkBalance = ({ telephone }) =>
  knex('accounts')
  .select(['balance'])
  .where({ telephone })
  .then((res) => res[0])
  .catch(console.log)

module.exports = checkBalance
