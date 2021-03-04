const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
  },
  displayName: {
    type: String,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  isAuthor: {
    type: Boolean,
    required: true,
    default: false,
  },
  movies: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Movie",
    },
  ],
  favorite: [],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comments",
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
