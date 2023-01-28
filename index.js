let express=require("express");
const router = require("./router/router");
require("dotenv").config()
let app=express()

let port=process.env.PORT || 4000;

// req body use korar jnno
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// connection of mongoDB
require("./connectDB/connectDB")


// router using
app.use(router)


//when we want to us  html and css file together 
app.use(express.static("view"))



// when we want to use ejs
app.set("view engine","ejs")



// router error
app.use((req,res,next)=>{
    res.send(`<h1>Router Error</h1>`)
})

// server error
app.use((err,req,res,next)=>{
    res.send(`<h1>Server error.</h1> <br> message:${err.message} `)
})


app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})

