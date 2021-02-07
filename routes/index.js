const { Router } = require('express')
const express = require('express')
const router = express.Router()
const productionHouse = require('./productionHouse')
const movie = require('./movie')
const cast = require('./cast')


router.get('/',(req,res)=>{
    res.render('home')
})

router.use('/productionHouses',productionHouse)
router.use('/movies',movie)
router.use('/casts',cast)


module.exports = router