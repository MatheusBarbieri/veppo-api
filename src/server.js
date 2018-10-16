const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const apiErrorHandler = require('api-error-handler')
const logger = require('morgan')
const http = require('http')
const routes = require('./routes')
const config = require('../config')

const app = express()
const { port = 5000 } = config

app.disable('x-powered-by')

app.use(logger('combined'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', routes)

app.use((req, res, next) => {
  next(createError(404))
})

app.use(apiErrorHandler())

const server = http.createServer(app)

server.listen(port, () => {
  const { address } = server.address()
  console.log(`Running app on ${address}:${port}.`)
})
