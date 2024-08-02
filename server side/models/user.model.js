const mongoose = require("mongoose")
const bcrypt = require("bcrypt")



const userSchema = mongoose.Schema({
    firstName: {type:String,required:[true, 'firstName is required']},
    lastName : {type:String,required:true},
    password:{type:String, required:true, unique:true},
    email: {type:String, unique: true}
 })


 userSchema.pre("save",function(next){
    bcrypt.hash(this.password, 10).then((hashed)=>{
        this.password= hashed
        console.log(hashed);
        next()
    }).catch((err)=>{
        console.log(err);
    })
})

let userModel = mongoose.model("my_user", userSchema)
module.exports = userModel
