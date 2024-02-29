const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.get('/', usuarioController.getAllUsuarios);
router.post('/', usuarioController.createUsuario);
router.get('/:usuarioId', usuarioController.getUsuarioById);
router.put('/:usuarioId', usuarioController.updateUsuario);
router.delete('/:usuarioId', usuarioController.deleteUsuario);

module.exports = router;
