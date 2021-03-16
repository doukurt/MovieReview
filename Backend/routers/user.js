const UserService=  require('../services/User-Service')
const express=require('express')
const router=express.Router();



router.post('/:username',UserService.uploadImage)
router.get('/:username',UserService.getUser)
router.delete('/:username',UserService.removeFavorite)
router.delete('/comment/:username',UserService.removeComment)
router.delete('/delete/:username',UserService.deleteUser)
router.post('/movie/:username',UserService.addMovie)
router.get('/myMovie/:username',UserService.getMyMovies)
router.delete('/myMovie/:username',UserService.deleteMyMovie)
module.exports=router;