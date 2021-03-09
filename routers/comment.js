const CommentService=require('../services/CommentService')
const express=require('express')
const router=express.Router();


router.post('/createComment',CommentService.createComment)
module.exports=router;