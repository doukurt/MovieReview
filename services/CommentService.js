const CommentModel=require('../models/comments')
const MovieModel =require('../models/movie')
exports.createComment=async(req,res,next)=>{
 
  try {
console.log(req.body.comment.username)
const {movie_id,content}=req.body.comment
const comment= await CommentModel.create({content});

const movie =await MovieModel.find({movie_id:movie_id})
movie.comments.push(comment)
await movie.save();
res.status(200).json({data})
  } catch (e) {
  
  }
  

}
