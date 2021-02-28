const CommentModel=require('../models/comments')
const UserModel = require('../models/user')

exports.createComment=async(req,res,next)=>{
    const comment=await CommentModel.create(req.body);
    const commentUser = await  UserModel.findById({_id: comment.user})
    commentUser.comments.push(comment);
      await commentUser.save();
    res.status(200).json({success:true, data: comment })

}
exports.getComments=async(req,res,next)=>{
    const comments=await CommentModel.find()
  
    res.send(comments)
}