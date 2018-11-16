const { Router } = require('express')
const homeView = require('./home')
const citiesList = require('../routes/cities-list')
const freightsList = require('./freights-list')

const freight = Router()

freight.get('/', homeView)
freight.get('/cities', citiesList)
freight.get('/freights', freightsList)

module.exports = freight
