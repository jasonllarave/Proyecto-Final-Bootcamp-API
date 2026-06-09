
const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim:true,
        minlength:[4, 'El debe escribir al menos 4 caractares'],
        maxlength:[50, 'no puede exceder los 50 caracteres']
    },

    descripcion:{
        type: String,
        required: true
    },

    añoEstreno:{
        type: Number,
        required: true
    },

    genero:{
        type: String,
        required: true,
        trim: true,
        enum:['Accion', 'Comedia', 'Drama', 'Ciencia ficción', 'Terror', 'Suspenso', 'Romance', 'Familia', 'Animados', 'Documental']
    },

    rating:{
        type: Number,
        min: 0,
        max: 10
    },

    gratis:{
        type: Boolean,
        default: true

    },

    precio:{
        type: Number,
        default: 0
    }

}, {timestamps:true} );

module.exports = mongoose.model('Movie', MovieSchema);

