
const MovieModel=require('../models/movie')

exports.getMovies=async(req,res,next)=>{
    const movies=await MovieModel.find();
    res.send(movies);
}

  


    