const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.get('/', productoController.getAllProductos);
router.post('/', productoController.createProducto);
router.get('/:productoId', productoController.getProductoById);

module.exports = router;
