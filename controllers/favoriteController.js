const favorite = require('../models/Favorites');



exports.crearFavorito = async (req, res) => {
  try {
    const { usuarioId, peliculaId } = req.body;
    const nuevofavorito = new favorite({ usuarioId, peliculaId });
    const guardarFavorito = await nuevofavorito.save();

    res.status(200).json({
      exitoso: true,
      mensaje: 'Favorito creado',
      datos: guardarFavorito
    });
  } catch (error) {
    res.status(400).json({
      exitoso: false,
      mensaje: 'Error al guardar favorito',
      error: error.message
    });
  }
};



exports.todosFavoritos = async (req, res) => {
  try {
    const Favoritos = await favorite.find();
    res.status(200).json({
      exitoso: true,
      cantidad: Favoritos.length,
      datos: Favoritos
    });
  } catch (error) {
    res.status(500).json({
      exitoso: false,
      mensaje: 'No se puede obtener datos',
      error: error.message
    });
  }
};



exports.traerFavoritoId = async (req, res) => {
  try {
    const { id } = req.params;
    const traerId = await favorite.findById(id);

    if (!traerId) {
      return res.status(404).json({
        exitoso: false,
        mensaje: 'No se ha obtenido favorito'
      });
    }

    res.status(200).json({
      exitoso: true,
      datos: traerId
    });
  } catch (error) {
    res.status(500).json({
      exitoso: false,
      mensaje: 'No se encontró favorito',
      error: error.message
    });
  }
};


exports.actualizarFavorito = async (req, res) => {
  try {
    const { id } = req.params;
    const favoritoactualizado = req.body;
    const actualizar = await favorite.findByIdAndUpdate(
      id,
      favoritoactualizado,
      { new: true, runValidators: true }
    );

    if (!actualizar) {
      return res.status(404).json({
        exitoso: false,
        mensaje: 'No se actualizó el favorito'
      });
    }

    res.status(200).json({
      exitoso: true,
      mensaje: 'Se ha actualizado el favorito',
      datos: actualizar
    });
  } catch (error) {
    res.status(400).json({
      exitoso: false,
      mensaje: 'Error, no se actualizó el favorito',
      error: error.message
    });
  }
};


exports.eliminarFavorito = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminarFavorito = await favorite.findByIdAndDelete(id);

    if (!eliminarFavorito) {
      return res.status(404).json({
        exitoso: false,
        mensaje: 'No se encuentra el favorito'
      });
    }

    res.status(200).json({
      exitoso: true,
      mensaje: 'Favorito eliminado',
      datos: eliminarFavorito
    });
  } catch (error) {
    res.status(500).json({
      exitoso: false,
      mensaje: 'No se ha eliminado el favorito',
      error: error.message
    });
  }
};
