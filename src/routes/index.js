const { Router } = require('express')
const homeView = require('./home')

const router = Router()

router.get('/', homeView)

module.exports = router
