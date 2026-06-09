const express = require('express');
const router = express.Router();
const {crearUsuario,
       traerUsuarios,
       traerusuarioId,
       actualizarUsuario,
       eliminarUsuario
    
 } = require('../controllers/userController');

router.post('/', crearUsuario);
router.get('/', traerUsuarios);
router.get('/:id', traerusuarioId);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;