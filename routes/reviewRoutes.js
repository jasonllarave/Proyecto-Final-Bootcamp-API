const express = require('express');
const Router = express.Router();
const {CrearReview, TraerReview, TraerReviewId, ActualizarReview, EliminarReview} = require('../controllers/reviewController');

Router.post('/', CrearReview);
Router.get('/', TraerReview);
Router.get('/:id', TraerReviewId)
Router.put('/:id', ActualizarReview);
Router.delete('/:id', EliminarReview);

module.exports = Router;