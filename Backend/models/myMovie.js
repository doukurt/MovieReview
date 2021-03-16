const mongoose = require("mongoose");
const myMovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    
  },
   overview:{
       type:String,
       required:true,
     
   },
   poster_path:{
       type:String
   },
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
});
const myMovieModel = mongoose.model("myMovie", myMovieSchema);
module.exports = myMovieModel;
