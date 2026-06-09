const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    nombres:{
        type: String,
        required:[true, 'Es necesario su nombre'],
        trim: true,
        minlength:[4, 'Es necesario que el nombre tenga minimo 4 caracteres'],
        maxlength:[30, 'No puede exceder 30 caracteres']
    },

    apellidos:{
        type: String,
        required:[true, 'son necesarios sus apellidos'],
        trim: true,
        minlength:[4, 'Es necesario que el nombre tenga minimo 2 caracteres'],
        maxlength:[30, 'No puede exceder 30 caracteres']    
    },

    email:{
        type: String,
        required:[true, 'Es necesario escribir su correo electronico'],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido']

    },

    telefono:{
        type: String,
        sparse: true
    },

    ciudad:{
        type: String,
        default: 'no especificada'
    },

    rol:{
        type: String,
        enum: ['usuario', 'admin', 'moderador'],
        default:'usuario'
    },

    fechaRegistro:{
        type:Date,
        default: Date.new
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)