const UserService=require('../services/User-Service')
const express=require('express')
const router=express.Router();

router.get('/all',UserService.getUsers);



module.exports=router;