const Food = require('../models/food_model.js');

async function index(req, res, next) {
  const foods = await Food.find({});
  res.render('index', { title: 'Foodyar', foods });
}

module.exports = { index };
