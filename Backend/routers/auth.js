const AuthService=require('../services/AuthService')
const express=require('express')
const router=express.Router();
router.post('/signup',AuthService.signup)

router.post('/login',AuthService.login)

module.exports=router;