const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    unique:true,

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
    select:false
    
  },
  isAuthor: {
    type: Boolean,
    required: true,
    default: false,
  },
  image:{
    type:String,
  },
  movies: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "myMovie",
    },
  ],
  favorite: [
    {
      type:mongoose.SchemaTypes.ObjectId,
      ref:"Movie"
    }
  ],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comments",
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
