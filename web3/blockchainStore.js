const retrieveBalance = require('./retrieveBalance.js')
const sendTransaction = require('./sendTransaction.js')
const buyKT = require('./buyKT.js')
const sellKT = require('./sellKT.js')

module.exports = ({ socket }) => {
  retrieveBalance({ socket }),
  sendTransaction({ socket }),
  buyKT,
  sellKT,
}
