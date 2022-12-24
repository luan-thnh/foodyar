var express = require('express')
var router = express.Router()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var loginController = require('../controllers/login_controller')
var registerController = require('../controllers/register_controller')
var logoutController = require('../controllers/logout_controller')
var profileController = require('../controllers/profile_controller')
var middlewareSession = require('../middlewares/redirectLogin')

router.get('/login', loginController.index)
router.post('/login', loginController.create)

router.get('/register', registerController.index)
router.post('/register', registerController.create)

router.get('/logout', logoutController.index)

router.get('/profile', profileController.index)
router.get('/profile/edit/:id', profileController.edit)
router.post('/profile/edit/', upload.single('avatar'), profileController.update)

module.exports = router
