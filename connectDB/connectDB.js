let mongoose=require("mongoose")

require("dotenv").config()


let url=process.env.DB_url


mongoose.set('strictQuery', true)
 let connectDb= mongoose.connect(url)
    .then(()=>{
        console.log("mongodb is connected")
    })
    .catch(()=>{
        console.log("mongoDB is not connected")
    })


   module.exports=connectDb 

