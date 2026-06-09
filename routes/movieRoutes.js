
const express = require('express');
const router = express.Router();
const {crearMovie, traerMovies, traerMovieId, actualizarMovie, eliminaMovie   } = require('../controllers/movieController')

router.post('/', crearMovie);
router.get('/', traerMovies);
router.get('/:id', traerMovieId );
router.put('/:id', actualizarMovie );
router.delete('/:id', eliminaMovie );

module.exports = router;