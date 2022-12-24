const Product = require('../models/product.js')

function index(req, res, next) {
  console.log(req.user)
  res.render('pages/search', {
    title: 'Foodyar || Search',
    products: [],
    user: req.user,
  })
}

async function create(req, res, next) {
  var search = req.body.search
  const products = await Product.find({
    name: { $regex: '.*' + search + '.', $options: 'i' },
  })

  res.render('pages/search', {
    title: 'Foodyar || Search',
    products: products,
    user: req.user,
  })
}

module.exports = { index, create }
