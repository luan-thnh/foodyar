var express = require('express')
var router = express.Router()
var homeController = require('../controllers/home_controller')
var menuController = require('../controllers/menu_controller')
var cartController = require('../controllers/cart_controller')
var shoppingController = require('../controllers/shopping_controller')
var searchController = require('../controllers/search_controller')

/* GET home page. */
router.get('/', homeController.index)

router.get('/menu', menuController.index)

router.get('/add-to-cart/:id', cartController.index)
router.get('/reduce/:id', cartController.reduce)

router.get('/shopping', shoppingController.index)
router.get('/shopping/checkout', shoppingController.checkout)
router.get('/shopping/product/:id', shoppingController.product)

router.get('/search', searchController.index)
router.post('/search', searchController.create)

module.exports = router
