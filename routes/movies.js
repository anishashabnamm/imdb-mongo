const express = require ('express')
const {searchMovies, uploadMovies, updateMovies, deleteMovies, getMovies, getMovieById} = require('../controllers/movies')
const router = express.Router()

router.route('/').get(searchMovies).post(uploadMovies)
router.route(':/id').patch(updateMovies).delete(deleteMovies).get(getMovies, getMovieById)

module.exports= router