const mongoose = require('mongoose')
const { Schema } = mongoose;
const subuserSc = new mongoose.Schema({
    user_name : String,
    user_email: String,
    age: Number,
    country:String, 
    image:String,
    creator: [{ type: Schema.Types.ObjectId, ref:'signups' }]
    })
    const subUsermodel = mongoose.model("users", subuserSc)
module.exports = {subUsermodel}
