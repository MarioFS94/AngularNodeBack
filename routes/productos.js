//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProduct);
router.get('/', productoController.getProducts);
router.get('/:id', productoController.getProduct);
router.put('/:id', productoController.putProduct);
router.delete('/:id', productoController.deleteProduct);

module.exports = router;