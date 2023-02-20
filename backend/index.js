const express=require('express');
require('dotenv').config()
const postRoutes=require('./routes/post.routes')
const userRoutes=require('./routes/user.routes')
const connection=require('./src/db')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())
app.use('/users',userRoutes)

app.use('/posts',postRoutes)

app.listen(process.env.SERVER_PORT,async()=>{
    try {
        await connection
        console.log('connected to db')
    } catch (error) {
        console.log('cannot connect to db')
        console.log(error)
        
    }
    console.log(`server is listening at http://localhost:${process.env.SERVER_PORT}`)
})