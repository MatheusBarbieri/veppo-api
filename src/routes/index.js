const { Router } = require('express')
const homeView = require('./home')
const citiesList = require('./cities-list')
const routesList = require('./routes-list')

const router = Router()

router.get('/', homeView)
router.get('/cities', citiesList)
router.get('/routes', routesList)

module.exports = router
