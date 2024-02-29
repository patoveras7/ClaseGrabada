const Pedido = require('../models/pedido.model');

exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Puedes agregar más funciones según sea necesario para crear, actualizar o eliminar pedidos
