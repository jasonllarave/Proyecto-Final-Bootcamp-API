const Review = require('../models/Review')


exports.CrearReview = async(req, res) => {
    try{
        const {usuarioId, peliculaId, comentario, rating} = req.body
        
        const nuevaReview = new Review({ 
            usuarioId,
            peliculaId,
            comentario,
            rating        
        })

        const guardar = await nuevaReview.save();

        res.status(200).json({
            exitoso: true,
            mensaje: 'Reseña creada',
            datos: guardar
        });

    }catch(error){
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al crear la reseña',
            error: error.message
        });
    }
};

exports.TraerReview = async (req, res) => {
    try{
        const todasReview = await Review.find();

        res.status(200).json({
            exitoso: true,
            cantidad: todasReview.length,
            datos: todasReview
        });

    }catch(error){
        res.status(400).json({
            exitoso: false,
            mensaje: 'Error no se ha obtenido reseñas',
            error: error.message
        });
    }
};

exports.TraerReviewId = async (req, res) => {
    try{
        const {id} = req.params;
        const reviewId = await Review.findById(id);

        if(!reviewId){
            res.status(404).json({
                exitoso: false,
                mensaje: 'No se obtuvo la reseña'
            });
        }

        res.status(200).json({
            exitoso: true,
            datos: reviewId 
        });

    }catch(error){
        res.status(500).json({
            exitoso: true,
            mensaje:'Error no se obtuvo la sereña',
            error: error.message
        });
    }
};

exports.ActualizarReview = async (req, res) => {
    try{
        const {id} = req.params;
        const reviewActualizada =  req.body;

        const actualizarReview = await Review.findByIdAndUpdate(
            id,
            reviewActualizada,
            { new: true, runValidators: true}
        );

        if(!actualizarReview){
            res.status(404).json({
                exitoso: false,
                mensaje: 'No se actualizo la reseña'
            });
        }

        res.status(200).json({
            exitoso: true,
            mensaje: 'Se ha actualizado la reseña',
            datos: actualizarReview
        });

    }catch(error){
        res.status(400).json({
            exitoso: false,
            mensaje: 'Error no se actualizo la reseña',
            error: error.message
        });
    }
};

exports.EliminarReview = async (req, res) => {
    try{
        const {id}= req.params;
        const reviewEliminada = await Review.findByIdAndDelete(id);

        if(!reviewEliminada){
            return res.status(404).json({
                exitoso: false,
                mensaje: 'no se encuentra la reseña',
            });
        }

        res.status(200).json({
            exitoso: true,
            mensaje: 'Reseña eliminada',
            datos: reviewEliminada
        });

    }catch(error){
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al eliminar la reseña',
            error: error.message
        });
    }
};