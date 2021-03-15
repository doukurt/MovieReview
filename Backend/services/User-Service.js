const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");
const MovieModel = require("../models/movie");
const base64Img = require("base64-img");

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username })
      .populate({ path: "comments", select: ["content", "movie"] })
      .populate({ path: "favorite", select: ["title", "poster_path"] })
      .then((user) => {

        res.json(user)
      })
  } catch (e) {
    console.log(e);
  }
};
exports.deleteUser = async (req,res)=>{
  await UserModel.deleteOne({username:req.params.username})
}

exports.uploadImage = (req, res) => {
  const { image } = req.body;
  base64Img.img(image, "./server/public", Date.now(), async (err, filepath) => {
    const pathArr = filepath.replace(/\\/g, "/").split("/");
    const fileName = pathArr[pathArr.length - 1];
    const user = await UserModel.findOne({ username: req.params.username });
    user.image = fileName;
    await user.save();
    res.status(200).json({
      success: true,
    });
  });
};

exports.addFavorite = async (req, res) => {
  const { movieId, username } = req.body;
  const user = await UserModel.findOne({ username });
  const movie = await MovieModel.findOne({ id: movieId });
  let count = true;
  user.favorite.map((item, index) => {
    if (item._id.equals(movie._id)) {
      count = false;
    }
  })
  if (count) {
    user.favorite.push(movie._id)
  }

  movie.owner_Favorite = user._id;
  await user.save();
  await movie.save();
  res.json({
    success: true,
  });
};

exports.removeFavorite=async(req,res)=>{
  const user =await UserModel.findOne({username:req.params.username})
  console.log(req.body.movie)
  if(user.favorite.includes(req.body.movie))
  {  const findMovieIndex= (element) => element == req.body.movie;
     const spliceOfindex=user.favorite.findIndex(findMovieIndex)
     user.favorite.splice(spliceOfindex,1)
  }
 
 await user.save();
 res.json({ 
   success:true
 })
}
exports.removeComment = async (req, res) => {
  await CommentModel.deleteOne({_id:req.body.commentId})  
}