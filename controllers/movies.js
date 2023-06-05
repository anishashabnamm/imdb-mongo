const { json , response, request } = require ('express')
const moviesModel = require('../models/movies')
const searchMovies = async (request, response) =>
{
    // response.send("This is the list of movies")
    try {
        const movies = await moviesModel.find()
        response.status(200).json(movies)
    }
    catch(error){
        response.status(500).json({message: error})
    }
}

const uploadMovies = async (request, response) =>
{
    // response.send("Please upload the movie")
    const newMovies = new moviesModel({
        title: request.body.title,
        year: request.body.year,
        genre: request.body.genre,
        DateOfUpload: request.body.DateOfUpload
    })
    try{
        const movie = await newMovies.save()
        response.status(200).json(movie)
    }
    catch(error){
        response.status(500).json({message: "couldn't upload movie"})
    }
}

const getMovieById =  async (request, response) =>
{
    response.status(200).json(response.movie)
   
}

const updateMovies = async (request, response) =>
{
    // response.send("This is the updated list of movies")
    if(request.body.title!=null)
    {
        response.movie.title = request.body.title
    }
    if(request.body.year!=null)
    {
        response.movie.year = request.body.year
    }
    if(request.body.genre!=null)
    {
        response.movie.genre = request.body.genre
    }

    try
    {
        const updateMovies = await response.movie.save()
        response.status(201).json(updateMovies)
    }
    catch(error)
    {
        response.status(400).json({message:error.message})
    }
 
}

const deleteMovies = async (request, response) =>
{
    // response.send("Delete the movie")
    try{
        {
            await response.movie.deleteOne()
            response.json({message: `Deleted ${response.movie.title}`})
        }
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

async function getMovies(request, response, next){
    let movie
    try{
        movie = await moviesModel.findById(request.params.id)
        if(movie == null)
        {
            return response.status(404).json({message: "enter a valid id"})
        }
        response.movie = movie
        next()
    }
    catch(error) {
        return response.status(500).json({message: "error"})
    }
}

module.exports = {searchMovies, uploadMovies, updateMovies, deleteMovies, getMovies, getMovieById}
