const Movie = require('../models/Movie');


exports.crearMovie = async (req, res) => {

    try{

        const {nombre, descripcion, añoEstreno, genero, rating, gratis, precio} = req.body;

        const nuevaMovie = new Movie({
            nombre, 
            descripcion, 
            añoEstreno, 
            genero,
            rating, 
            gratis,
            precio
        });

        const guardarMovie = await nuevaMovie.save(); 

        res.status(200).json({
            exitoso: true,
            mensaje: 'Se ha almacenado la pelicula',
            datos: guardarMovie 
        });

    }catch(error){
        
        res.status(400).json({
            exitoso: false,
            mensaje: 'no se guardo la pelicula',
            error: error.message
        });        
    }
};

exports.traerMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        
        res.status(200).json({
            exitoso: true,
            cantidad: movies.length,
            datos: movies
        });

    }catch(error){
        res.status(500).json({
            exitoso: false,
            mensaje: 'no se puede obtener datos',
            error: error.message
        });

    }
};


exports.traerMovieId = async (req, res) =>{
    try{
        const {id} = req.params;
        const movie = await  Movie.findById(id);

        if(!movie){
            res.status(404).json({
                exitoso: false,
                mensaje: 'no se ha obtenido la pelicula',

            });           
        }
         res.status(200).json({
                exitoso: true,
                datos: movie
            });

    }catch(error){
        res.status(500).json({
            exitoso: false,
            mensaje: 'no se encontro la pelicula',
            error: error.message
        });

    }
};

exports.actualizarMovie = async (req, res) => {

    try{

        const {id} = req.params;
        const movieActualizada = req.body;
        const actualizar = await Movie.findByIdAndUpdate(
            id,
            movieActualizada,
            { new:true, runValidators:true}
        );

        if(!actualizar){
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No se actualizo la pelicula'
            });
        }

        res.status(200).json({
            exitoso: true,
            mensaje: 'se ha actualizado la pelicula',
            datos: actualizar
        });

    }catch(error){
        res.status(400).json({
              exitoso: false,
              mensaje: 'Error no se actualizo la pelicula',
              error: error.message
        });

      
    }

};

exports.eliminaMovie = async(req, res) => {

    try{
        
        const {id} = req.params;
        const eliminar = await Movie.findByIdAndDelete(id);

        if(!eliminar){
           return res.status(404).json({
                exitoso: false,
                mensaje: 'No se encuentra la pelicula'
            });
        }

        res.status(200).json({
            exitoso: true,
            mensaje: 'Pelicula eliminada',
            data: eliminar
        });

    }catch(error){
        res.status(500).json({
            exitoso: false,
            mensaje: 'No se ha eliminado la pelicula',
            error: error.message
        });

    }

};