const AuthService=require('../services/AuthService')
const CommentService=require('../services/CommentService')
const UserService=require('../services/CommentService')
const MovieService=require('../services/Movie-Service')
const express=require('express')
const router=express.Router();
router.post('/signup',AuthService.signup)

router.post('/login',AuthService.login)

router.post('/createComment',CommentService.createComment)


// router.get('/getUserofComments',UserService.getUserofComments)

module.exports=router;