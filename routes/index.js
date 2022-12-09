var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home_controller');
var loginController = require('../controllers/login_controller');
var registerController = require('../controllers/register_controller');
var menuController = require('../controllers/menu_controller');
var logoutController = require('../controllers/logout_controller');

/* GET home page. */
router.get('/', homeController.index);

router.get('/login', loginController.index);

router.get('/register', registerController.index);

router.get('/menu', menuController.index);

router.get('/logout', logoutController.index);

module.exports = router;
