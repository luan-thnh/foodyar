const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Food = new Schema({
  name: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  rate: { type: Number },
  price: { type: Number },
});

const FoodModel = mongoose.model('Food', Food);

module.exports = FoodModel;
