const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  categoria: String
});

module.exports = mongoose.model('Producto', ProductoSchema);
