const mongoose = require("mongoose")
require("dotenv").config();

const mongooseUrl = process.env.MONGODB_URL

mongoose.connect(mongooseUrl)
const db = mongoose.connection;


db.on("connected",()=>{
    console.log("connected to mongodb server")
})
db.on("error",(err)=>{
    console.log("mongodb connected error",err)
})
db.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

module.exports = db;