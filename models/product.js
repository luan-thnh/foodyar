const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  rate: { type: Number },
  price: { type: Number },
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
