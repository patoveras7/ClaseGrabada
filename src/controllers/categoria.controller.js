const Categoria = require('../models/categoria.model');

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Puedes agregar más funciones según sea necesario para crear, actualizar o eliminar categorías
