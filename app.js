const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const socket = require('socket.io')

const app = express()

const getAllDataHandler = require('./routes/getAllAccountData.js')
const issueCoinsHandler = require('./routes/issueCoins.js')
const createWebhookHandler = require('./routes/webhook.js')

// Middleware
const corsWhiteList = ['http://localhost:3000']
app.use(cors({ origin: corsWhiteList }))
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))
app.get('/get-all-account-data', getAllDataHandler)
app.post('/issue-coins', issueCoinsHandler)

const server = app.listen(process.env.PORT || 4000, () => {
  console.log('Example app listening on port 4000!')

  const io = socket(server, { origins: '*:*' })
  const webhookHandler = createWebhookHandler({ socket: io })

  app.post('/webhook', webhookHandler)
  io.on('connection', (client) => {
    console.log('client connected to socket', client)
  });

})
