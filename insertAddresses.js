const fs = require('fs')
const csv = fs.readFileSync('./accounts.csv', 'utf8')
const createEthAddress = require('./db/createEthAddress.js')

const accounts = csv.split('\n').map((row) => ({
  address: row.split(',')[1].trim(),
  privateKey: row.split(',')[0].trim()
}))

Promise.all(accounts.map(createEthAddress)).then(() => console.log('done!'))
