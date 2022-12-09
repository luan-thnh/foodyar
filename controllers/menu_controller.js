const Food = require('../models/food_model.js');

async function index(req, res, next) {
  const foods = await Food.find({});
  res.render('pages/menu/index', { title: 'Foodyar || Menu', foods });
}

module.exports = { index };
