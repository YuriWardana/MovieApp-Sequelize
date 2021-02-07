const express = require('express')
const router = express.Router()
const ControllerProd = require('../controllers/ControllerProd')

router.get('/',ControllerProd.read)


module.exports = router