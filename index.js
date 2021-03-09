const express=require('express')
const bodyParser=require('body-parser')
const axios=require('axios')
const MovieModel=require('./models/movie')

const cors=require('cors')
const app=express();
app.use(cors());
app.use(bodyParser.json())
require("./mongodb-connection")
const userRouter=require('./routers/user')
const movieRouter=require('./routers/movie')
const authRouter=require('./routers/auth')
const commentRouter=require('./routers/comment')
app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use('/',authRouter)
app.use('/comments',commentRouter)


//  const addMovies=async(req,res,next)=>{
    
//      const movies= [] 
//      await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=63c20ab0688ef19ee1cdf0eacf135738&page=2')
//      .then((res=>{
//          movies.push(res.data.results)
      
//      }))
//      await MovieModel.create(movies[0])  
//  }
// addMovies()
// const movies=()=>{
//     const movie=axios.get('https://api.themoviedb.org/3/movie/527774?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US').then((res)=>{console.log(res.data)})
//     console.log(movie)
// }
// movies()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen('3000',function(){
    console.log('listening')
})