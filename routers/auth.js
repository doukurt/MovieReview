const AuthService=require('../services/AuthService')
const CommentService=require('../services/CommentService')
const UserService=require('../services/CommentService')
const express=require('express')
const router=express.Router();
router.post('/signup',AuthService.signup)

router.post('/login',AuthService.login)

// router.get('/getUserofComments',UserService.getUserofComments)

module.exports=router;