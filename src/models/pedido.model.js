const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  cliente_id: String,
  productos: [{
    producto_id: String,
    cantidad: Number
  }]
});

module.exports = mongoose.model('Pedido', PedidoSchema);
