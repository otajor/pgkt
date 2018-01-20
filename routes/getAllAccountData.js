const getAllAccountData = require('../db/getAllAccountData.js')

module.exports = (req, res) => {
  getAllAccountData()
  .then((result) => {
    return res.send({
      success: true,
      payload: result
    });
  })
};
