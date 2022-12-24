var User = require('../models/user')

function index(req, res, next) {
  res.render('pages/profile', { title: 'Foodyar || Profile' })
}

function edit(req, res, next) {
  res.render('pages/profile/edit', {
    title: 'Foodyar || Profile',
    user: req.user,
  })
}

async function update(req, res, next) {
  if (req.file) {
    var updatedDocument = await User.findByIdAndUpdate(
      { _id: req.body.user_id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          avatar: req.file.filename,
          address: req.body.address,
        },
      },
      { new: true }
    )
  } else {
    var updatedDocument = await User.findByIdAndUpdate(
      { _id: req.body.user_id },
      {
        $set: {
          email: req.body.email,
          name: req.body.name,
          address: req.body.address,
        },
      },
      { new: true }
    )
  }

  res.redirect('/users/profile')
}

module.exports = { index, edit, update }
