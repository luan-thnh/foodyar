var express = require('express')
var router = express.Router()

var loginController = require('../controllers/login_controller')
var registerController = require('../controllers/register_controller')
var logoutController = require('../controllers/logout_controller')
var middlewareSession = require('../middlewares/redirectLogin')

router.get('/login', loginController.index)
router.post('/login', loginController.create)

router.get('/register', registerController.index)
router.post('/register', registerController.create)

router.get('/logout', logoutController.index)

module.exports = router
