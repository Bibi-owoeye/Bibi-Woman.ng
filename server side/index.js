const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const router= require("./routes/user.route")
const cors = require("cors")


const PORT = process.env.PORT
const URI = process.env.URI
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.use("/",router)

app.listen(PORT,()=>{
    mongoose.connect(URI).then(()=>{

        console.log(`listening on port ${PORT} and database connected`);
    }).catch((err)=>{
        console.log("database connection error");
        console.log(err);
    })
})