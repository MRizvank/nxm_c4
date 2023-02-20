const express=require('express')
const Usermodel=require('../models/usermodel')
const PostsModel=require('../models/post.model')
const userRoutes=express.Router();

userRoutes.post('/register',async(req,res)=>{
    try {
        const email=req.body.email
        const oldUser=await Usermodel.find({email})
        if(oldUser!=0){
            res.send({msg:"User already exist, please login"})
        }else{
            const user=new Usermodel(req.body)
            await user.save()
            res.send({msg:"user registerd successfully"})
        }
      
    } catch (error) {
        res.send({msg:'cannot registr user',"error":error.message})
    }
  

})

userRoutes.post('/login',(req,res)=>{
    res.send("user will login")
})
userRoutes.post('/createpost',(req,res)=>{
    res.send('post created successfully')
})

module.exports=userRoutes