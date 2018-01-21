const knex = require('./client.js')

module.exports = ({ privateKey, telephone }) => {
  return knex('eth_addresses')
  .where('private_key', '=', privateKey)
  .update({ telephone: telephone })
  .catch(console.log)
}
