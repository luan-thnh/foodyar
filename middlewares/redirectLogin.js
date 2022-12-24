function redirectLogin(req, res, next) {
  if (req.session.user_id) {
    next()
  } else {
    res.redirect('/users/login')
  }
}

function redirectHome(req, res, next) {
  if (req.session.user_id) {
    res.redirect('/')
  } else {
    next()
  }
}

module.exports = { redirectLogin, redirectHome }
