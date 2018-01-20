const express = require('express')
const app = express()
var path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))
