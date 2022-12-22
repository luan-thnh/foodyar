var express = require('express')
var router = express.Router()
var homeController = require('../controllers/home_controller')
var menuController = require('../controllers/menu_controller')

/* GET home page. */
router.get('/', homeController.index)

router.get('/menu', menuController.index)

module.exports = router
