const express = require('express');
const app = express();
const cors = require('cors')
const port =4000;
const route = require('./router/route.js')
const dbcon = require('./utils/db.js')
app.use(cors())
app.use(express.json());
dbcon();
app.use('/api/auth', route)

// app.get('/',(req,res)=>{
//     res.send("hello1")
// })
app.listen(port,()=>{
    console.log("App is working")  
})