var express = require('express')
var router = express.Router()
var homeController = require('../controllers/home_controller')
var menuController = require('../controllers/menu_controller')
var cartController = require('../controllers/cart_controller')
var shoppingController = require('../controllers/shopping_controller')

/* GET home page. */
router.get('/', homeController.index)

router.get('/menu', menuController.index)

router.get('/add-to-cart/:id', cartController.index)

router.get('/shopping', shoppingController.index)

module.exports = router
