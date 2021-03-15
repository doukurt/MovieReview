const MovieService=require('../services/Movie-Service')
const express=require('express');
const UserService=require('../services/User-Service')
const router=express.Router();



router.get('/all',MovieService.getMovies);
router.post('/:id',MovieService.postCommentToMovie)
router.get('/:id',MovieService.getCommentsOfMovie)
router.post('/',UserService.addFavorite)
   
   
   module.exports=router;