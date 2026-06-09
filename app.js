require('dotenv').config();
const express = require('express');
const conexionDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');



const app = express();

conexionDB();   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/favorites', favoriteRoutes);



app.get("/", (req, res) =>{
    res.json( {mensaje: "¡Api funciona!"});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
} );

module.exports = app;


