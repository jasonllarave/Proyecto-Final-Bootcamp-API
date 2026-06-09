
const express = require('express');
const router = express.Router();
const { crearFavorito, 
        todosFavoritos,
        traerFavoritoId,
        actualizarFavorito, 
       eliminarFavorito } = require('../controllers/favoriteController');


router.post('/', crearFavorito);
router.get('/', todosFavoritos);
router.get('/:id', traerFavoritoId);
router.put('/:id', actualizarFavorito);
router.delete('/:id', eliminarFavorito);

module.exports = router;