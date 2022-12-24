const Cart = require('../models/cart.js')
const Product = require('../models/product.js')

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

function checkout(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/index')
  }
  var cart = new Cart(req.session.cart)
  res.render('pages/shop/checkout', {
    title: 'Foodyar || Checkout',
    total: cart.totalPrice,
  })
}

async function product(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/index')
  }

  const productId = req.params.id
  const product = await Product.findById(productId)

  console.log(product)
  res.render('pages/shop/product', {
    title: 'Foodyar || Product',
    product: product,
  })
}

module.exports = { index, checkout, product }
