var passport = require('passport')

function index(req, res, next) {
  if (res.locals.user) res.redirect('/')

  res.render('pages/login', { title: 'Foodyar || Login' })
}

async function create(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next)
}

module.exports = { index, create }
