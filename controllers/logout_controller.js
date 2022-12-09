const Food = require('../models/food_model.js');

async function index(req, res, next) {
  const foods = await Food.find({});
  res.render('pages/logout/index', { title: 'Foodyar || Logout', foods });
}

module.exports = { index };
