const mongoose = require("mongoose")
// const mongooseUrl =  "mongodb://localhost:27017/restorent"
const mongooseUrl =  "mongodb+srv://ps1765725_db_user:MatlasPrince-1234@cluster0.j1cuyqb.mongodb.net/"

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