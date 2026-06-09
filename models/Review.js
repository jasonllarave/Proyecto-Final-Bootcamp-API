const mongoose = require('mongoose');
const User = require('../models/Users');
const Movie = require('../models/Users');

const ReviewSchema = new mongoose.Schema({

    usuarioId:{
        type: String,
        ref: 'User',
        required: true

    },

    peliculaId:{
        type: String,
        ref:'Movie',
        required: true 
    },

    comentario:{
        type: String,
        required: true
    },

    rating:{
        type: Number,
        min: 0,
        max: 10,
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model('Review', ReviewSchema);