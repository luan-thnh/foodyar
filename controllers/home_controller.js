const Product = require('../models/product.js')

async function index(req, res, next) {
  const products = await Product.find({})
  res.render('index', { title: 'Foodyar', products })
}

module.exports = { index }
