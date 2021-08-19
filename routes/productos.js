//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProduct);

module.exports = router;