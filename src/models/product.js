const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  options: String,
  reviews: String,
})

module.exports = mongoose.model('Product', productSchema)