const express=require('express')
const bodyParser=require('body-parser')


const app=express();
app.use(bodyParser.json())
require("./mongodb-connection")
const userRouter=require('./routers/user')
const movieRouter=require('./routers/movie')
const authRouter=require('./routers/auth')
app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use('/',authRouter)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen('3000',function(){
    console.log('listening')
})