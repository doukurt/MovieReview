const UserModel = require("../models/user");
const CommentModel = require("../models/comments");
const MovieModel = require("../models/movie");

exports.getMovies = async (req, res, next) => {
  const movies = [];
  movies.push(await MovieModel.find());
  res.send(movies);
};
exports.getMovie = async (req, res, next) => {
  const movie = await MovieModel.findById(req.params.id);
  res.send(movie);
};

exports.postCommentToMovie = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.user });
    const comment = await CommentModel.create({ content: req.body.comment });
    const movie = await MovieModel.findOne({ id: req.params.id });

    user.comments.push(comment);
    comment.user = user._id;
    movie.comments.push(comment);
    comment.movie = movie.id;
    await movie.save();
    await user.save();
    await comment.save();
    res.status(200).json({
      message: comment.content + "Success send",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCommentsOfMovie = async (req, res, next) => {
await CommentModel.find({movie:req.params.id}).limit( 5 ).populate({path:"user",select:["username","displayName","image"]})
.then((comment)=>{

  res.json(comment)
})

}