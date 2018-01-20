const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const path = require('path')
const webhookHandler = require('./routes/webhook.js')

// Middleware
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))
app.post('/webhook', webhookHandler)

app.listen(process.env.PORT || 4000, () => console.log('Example app listening on port 4000!'))
