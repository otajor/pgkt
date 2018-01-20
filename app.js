const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

const path = require('path')
const webhookHandler = require('./routes/webhook.js')

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))
app.post('/webhook', jsonParser, webhookHandler)

app.listen(process.env.PORT || 4000, () => console.log('Example app listening on port 4000!'))
