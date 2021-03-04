const express=require('express')
const bodyParser=require('body-parser')
const axios = require('axios')
const MovieModel= require('./models/movie')

const cors=require('cors')
const app=express();
app.use(cors());
app.use(bodyParser.json())
require("./mongodb-connection")
const userRouter=require('./routers/user')
const movieRouter=require('./routers/movie')
const authRouter=require('./routers/auth')
app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use('/',authRouter)
// const addMovies=async(req,res,next)=>{
    
//     const movies= [] 
//     await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=63c20ab0688ef19ee1cdf0eacf135738&page=2')
//     .then((res=>{
//         movies.push(res.data.results)
//         console.log('Movie '+ JSON.stringify(movies[0]) )
//         console.log('data'+ res.data.results[0])
//     }))
//     await MovieModel.create(movies[0])  
// }
// addMovies()


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen('3000',function(){
    console.log('listening')
})