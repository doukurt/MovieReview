const MovieService=require('../services/Movie-Service')
const express=require('express')
const router=express.Router();



router.get('/all',MovieService.getMovies);

   
   
   module.exports=router;