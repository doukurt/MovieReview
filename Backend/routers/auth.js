const AuthService=require('../services/AuthService')
const CommentService=require('../services/CommentService')
const UserService=require('../services/User-Service')
const express=require('express')
const router=express.Router();
router.post('/signup',AuthService.signup)

router.post('/login',AuthService.login)

module.exports=router;