var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home_controller');
var loginController = require('../controllers/login_controller');
var registerController = require('../controllers/register_controller');
var menuController = require('../controllers/menu_controller');

/* GET home page. */
router.get('/', homeController.index);

router.get('/login', loginController.index);

router.get('/register', registerController.index);

router.get('/menu', menuController.index);

module.exports = router;
