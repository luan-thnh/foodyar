const Product = require('../models/product.js')

function index(req, res, next) {
  res.render('pages/search', { title: 'Foodyar || Search', products: [] })
}

async function create(req, res, next) {
  var search = req.body.search
  const products = await Product.find({
    name: { $regex: '.*' + search + '.', $options: 'i' },
  })

  res.render('pages/search', {
    title: 'Foodyar || Search',
    products: products,
  })
}

module.exports = { index, create }
