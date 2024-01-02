const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const signupsch = new mongoose.Schema(
    {
        user_name:{
            type:String,
            required:true
        },
        user_email:{
            type:String,
            required:true,
            unique:true
        },
        dob:{
             type:Date,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }, 
        gender:{
         type:String,
         required:true,
         enum:["male","female"]
        },
        password:{
            type:String,
            require:true
        }
     
    }
)
signupsch.pre('save', async function(){
    const user = this;
    const salt = 10;
     const hashp = await bcrypt.hash(user.password, salt);
     user.password = hashp
})
const signupmodel = mongoose.model("signups", signupsch)
module.exports = {signupmodel}