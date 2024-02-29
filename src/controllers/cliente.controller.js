const Cliente = require('../models/cliente.model');

exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Puedes agregar más funciones según sea necesario para crear, actualizar o eliminar clientes
