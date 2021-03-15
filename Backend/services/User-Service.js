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

exports.removeFavorite = async (req, res) => {
  const user = await UserModel.findOne({ username: req.params.username })
  let count = true;
  let spliceOfindex;
  for (var i = 0; i < user.favorite.length; i++) {
    if (user.favorite[i]._id.equals(req.body.movie)) {
      spliceOfindex = i;
      count = false;
    }
  }
  if (!count) {
    user.favorite.splice(spliceOfindex, 1)
  }
  await user.save();
  res.json({
    success: true
  })
}
exports.removeComment = async (req, res) => {
  const { movieId, comment } = req.body;
  const user = await UserModel.findOne({ username: req.params.username })
  const movie = await MovieModel.findOne({ id: movieId })
  let count = true;
  let spliceOfindex;
  for (var i = 0; i < user.comments.length; i++) {
    if (user.comments[i]._id.equals(comment)) {
      spliceOfindex = i;
      count = false;
    }
  }
  if (!count) {
    user.comments.splice(spliceOfindex, 1)
  }
  await user.save();
  res.json({
    success: true
  })
  //deleting from movie side
  let countForMovie = true;
  let movieSpliceOfindex;
  for (var i = 0; i < movie.comments.length; i++) {
    if (movie.comments[i]._id.equals(comment)) {
      movieSpliceOfindex = i;
      countForMovie = false;
    }
  }
  if (!countForMovie) {
    movie.comments.splice(movieSpliceOfindex, 1)
  }
  await movie.save();
  res.json({
    success: true
  })
}