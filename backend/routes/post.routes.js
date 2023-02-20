const express=require('express')
const postRoutes=express.Router();

postRoutes.get('/',(req,res)=>{
    res.send("this will show the posts of logged in users")
})
postRoutes.get('/top',(req,res)=>{
    res.send("This will show the post details that has maximum number of comments")
})
postRoutes.patch('/update',(req,res)=>{
    res.send('The logged in user can update his/her posts.')
})
postRoutes.delete('/delete',(req,res)=>{
    res.send("he logged in user can delete his/her posts.")
})

module.exports=postRoutes