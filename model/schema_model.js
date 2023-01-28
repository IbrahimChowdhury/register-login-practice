let mongoose=require("mongoose")

let users_schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports= mongoose.model("testing_new_users",users_schema)



