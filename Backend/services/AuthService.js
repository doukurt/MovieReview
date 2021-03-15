const UserModel=require('../models/user')
const bcrypt = require('bcrypt');
 
const jwt=require('jsonwebtoken')


   async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
  
  async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

exports.signup=async(req,res,next)=>{
    try {
    const {username,displayName,password,isAuthor}=req.body
    const hashedPassword = await hashPassword(password);
    const user=await UserModel.create({username,displayName,password:hashedPassword,isAuthor})
    const accessToken = jwt.sign({ userId: user._id }, 'my-secret-app', {
      expiresIn: "1d"
    });
    console.log(user)

    user.accessToken = accessToken;
    await user.save();
       console.log(user.accessToken)
   res.json({
     data:user,
     message:'You Have SignUp Succesfully'
   })
    } catch (e) {
    next(e);
    }
   
   }
exports.login=async(req,res,next)=>{
  
  try {
  const {username,password}=req.body;
  if(!username || !password){
    return res.status(404).send({
      message:'Email and password must not be null'
    })
  }
  else{
   const user = await UserModel.findOne({username}).select('+password');
   if (!user) return next(new Error('Username does not exist'));
   const validPassword=await validatePassword(password,user.password)
   if (!validPassword) return next(new Error('Password is not correct'))
   const accessToken = jwt.sign({ userId: user._id }, 'my-secret-app', {
    expiresIn: "1y"
  });
  await UserModel.findByIdAndUpdate(user._id, { accessToken })
  res.status(200).json({
    data: { username: user.username,
            displayName:user.displayName,
          image:user.image},
    accessToken
  })
} 
  } catch (e) {
  next(e)
  }
  
  
  
  //   try {
  //   const {username,password}=req.body;
  //   const user =await UserModel.findOne({username})
  //   if(!user) return next(new Error('username is not found'))
  //  const validPassword=await  validatePassword(password,user.password)
  // if(!validPassword) return next(new Error('Password is not correct'))
  // const newUser =new UserModel({username:username})
  // res.status(200).json(newUser)
  // next('LoginSuccess')
  //   } catch (e) {
  //   next(e)
  //   }
  
  }

