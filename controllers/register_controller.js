var passport = require('passport')
var bcrypt = require('bcryptjs')
var { faker } = require('@faker-js/faker/locale/vi')

var User = require('../models/user.js')
var UserValidate = require('../validations/user_validate.js')

function index(req, res, next) {
  res.render('pages/register', {
    title: 'Foodyar || Register',
    error: false,
    type: false,
  })
}

function create(req, res, next) {
  var email = req.body.email
  var name = req.body.name
  var password = req.body.password
  var password2 = req.body.password2

  var { error } = UserValidate.registerValidator(req.body)

  console.log(error)

  if (error) {
    // res.render('pages/register/index', {git add
    //   title: 'Foodyar || Register',
    //   error: error.details[0].message,
    //   type: error.details[0].message.split('"')[1],
    // })
    res.redirect('/users/register')
  } else {
    User.findOne({ email: email }, function (err, user) {
      if (err) console.log(err)

      if (user) {
        res.redirect('/users/register')
      } else {
        var user = new User({
          email: email,
          name: name,
          password: password,
          avatar: faker.image.avatar(),
          address: faker.address.city(),
        })

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) console.log(err)

            user.password = hash

            user.save(function (err) {
              if (err) console.log(err)
              else {
                res.redirect('/users/login')
              }
            })
          })
        })
      }
    })
  }
}

module.exports = { index, create }
