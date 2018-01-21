const knex = require('./client.js')

module.exports = ({ privateKey, balance }) => {
  return knex('eth_addresses')
  .where('private_key', '=', privateKey)
  .update({ balance: balance })
  .catch(console.log)
}
