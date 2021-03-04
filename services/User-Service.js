const UserModel=require('../models/user.js')
const CommentModel=require('../models/comments')
   exports.getUsers=async(req,res)=>{
     try {
     const users=await UserModel.find()
        res.send(users)
     } catch (e) {
     
     }
        
      }
      // exports.getUserofComments= async(req,res)=>{
      //   const user = await UserModel.findById({_id:'603bc9965690d91fc8c0933a'})
      //   const contentofComments = await CommentModel.findById({_id:user.comments[0]})
      //   res.send(contentofComments.content)
   
      // }



