
const MovieModel=require('../models/movie')
const axios = require('axios')

exports.getMovies=async(req,res,next)=>{
    const movies=[]
    movies.push(await MovieModel.find())
    res.send(movies);
}


  


    