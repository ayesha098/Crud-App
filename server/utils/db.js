const mongoose = require('mongoose')

const conmongo =()=>{
    mongoose.connect("mongodb+srv://waleedayesha166:qaz1122@cluster0.jx3qnij.mongodb.net/website")

}

module.exports = conmongo