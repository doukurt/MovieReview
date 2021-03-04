const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
  movie: {
    ref: "Movie",
    type: mongoose.SchemaTypes.ObjectId,
  },
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
});
const CommentModel = mongoose.model("Comments", CommentSchema);
module.exports = CommentModel;
