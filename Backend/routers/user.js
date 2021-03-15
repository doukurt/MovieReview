const UserService=  require('../services/User-Service')
const express=require('express')
const router=express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});



router.post('/:username',upload.single('file'),UserService.uploadImage)
router.get('/:username',UserService.getUser)
router.delete('/:username',UserService.removeFavorite)
router.delete('/comment/:username',UserService.removeComment)
router.delete('/delete/:username',UserService.deleteUser)
module.exports=router;