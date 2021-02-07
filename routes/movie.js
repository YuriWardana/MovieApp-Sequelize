const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')

router.get('/',MovieController.read)
router.get('/add',MovieController.addForm)
router.post('/add',MovieController.postAdd)
router.get('/delete/:id',MovieController.destroy)
router.get('/edit/:id',MovieController.editForm)
router.post('/edit/:id',MovieController.postEdit)
router.get('/addCast/:id',MovieController.addCastForm)
router.post('/addCast/:id',MovieController.postAddCast)

router.get('/plus',MovieController.plus)



module.exports = router

