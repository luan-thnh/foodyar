const Cart = require('../models/cart.js')

function index(req, res, next) {
  if (!req.session.cart)
    res.render('pages/shop', { title: 'Foodyar || Shopping', products: null })

  var cart = new Cart(req.session.cart)

  console.log(cart.generateArr())
  res.render('pages/shop', {
    title: 'Foodyar || Shopping',
    products: cart.generateArr(),
    totalPrice: cart.totalPrice,
  })
}

module.exports = { index }
