const express = require('express')
const router = express.Router()
const CastController = require('../controllers/CastController')

router.get('/',CastController.read)
router.get('/add',CastController.addForm)
router.post('/add',CastController.postAdd)
router.get('/delete/:id',CastController.destroy)
router.get('/edit/:id',CastController.editForm)
router.post('/edit/:id',CastController.postEdit)
router.get('/movies/:id',CastController.getMovies)


module.exports = router