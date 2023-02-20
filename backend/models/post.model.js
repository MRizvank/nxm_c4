const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String,required:true},
    no_of_comments:{type:String,required:true}
},{
    versionKey:false
})

const PostsModel=mongoose.model('user',PostSchema)

module.exports=PostsModel