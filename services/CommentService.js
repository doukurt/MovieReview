const CommentModel=require('../models/comments')

exports.createComment=async(req,res,next)=>{
  try {
    const comment=await CommentModel.create(req.body);
    const commentUser = await  UserModel.findById({_id: comment.user})
    commentUser.comments.push(comment);
    await commentUser.save();
    res.status(200).json({success:true, data: comment })
  } catch (e) {
  console.log(e)
  }
  

}
