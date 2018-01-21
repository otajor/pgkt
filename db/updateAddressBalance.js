const knex = require('./client.js')

module.exports = ({ privateKey, balance }) => {
  return knex('eth_addresses')
  .returning('*')
  .where('private_key', '=', privateKey)
  .update({ balance: balance })
  .then((res) => res[0])
  .catch(console.log)
}
