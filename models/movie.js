const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  adult:{ type: Boolean, },
  backdrop_path:{type:String},
  genre_ids:[],
  movie_id:{type:Number},
  original_language:{type:String},
  original_title:{type:String},
  overview:{type:String},
  popularity:{type:Number},
  poster_path:{type:String},
  release_date:{type:String},
  title:{type:String},
  video:{type:Boolean},
  vote_average:{type:Number},
  vote_count:{type:Number},
  Author: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  comments: [
    {
      ref: "Comments",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});
const MovieModel = mongoose.model("Movie", MovieSchema);
module.exports = MovieModel;