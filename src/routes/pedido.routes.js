const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');

router.get('/', pedidoController.getAllPedidos);

module.exports = router;
