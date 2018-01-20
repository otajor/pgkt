const knex = require('knex')({
  client: 'postgresql',
  connection: 'postgres://oxsqrzuyhqiniq:8785fc9ee962b8bb78a66037baa608f65f19b5c71be6f7fa11f16822d46886bb@ec2-54-217-243-160.eu-west-1.compute.amazonaws.com:5432/d6knksdh19lqgk?ssl=true'
})

module.exports = knex
