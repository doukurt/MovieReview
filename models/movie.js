const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  movie_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: false,
    default: "0.0",
  },
  rating_votes: {
    type: String,
    required: false,
    default: "0",
  },
  poster: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  //trailer
  cast: [
    {
      actor: {
        type: String,
        required: true,
      },
      actor_id: {
        type: String,
        required: true,
      },
      character: {
        type: String,
        required: true,
      },
    },
  ],
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
