var express = require('express')
var router = express.Router()
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  },
})

var fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: fileFilter,
})

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
