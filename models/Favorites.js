
const mongoose = require("mongoose");
const User = require('../models/Users');
const Movie = require('../models/Users');


const FavoriteSchema = new mongoose.Schema({

    usuarioId:{
        type: String,
        ref: 'User',
        required: true

    },

    peliculaId:{
        type: String,
        ref: 'Movie',
        required: true

    }



 }, {timestamps:true});

 
   module.exports = mongoose.model('Favorite', FavoriteSchema);