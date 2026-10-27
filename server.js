// import and exports
// with common js
// const add = require("./add.js")
// const subtract = require("./subtract.js")

// with ES6 module    (import default)
// import add from "./add.js"
// import subtract from "./subtract.js"

//                    (import named)
// import {add} from "./add.js"
// import {subtract} from "./subtract.js"

// console.log(add(8,2))
// console.log(subtract(8,2))

// modules

// const os = require("node:os");
// const fs = require("node:fs");

// console.log(os.userInfo().username)

// fs.writeFile('message.txt', "Hi, I am prince", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// fs.appendFile("test.txt", "Hii, \nI am Pardeep Sharma \n", ()=> console.log("File has been created"))

// fs.readFile('test.txt', 'utf8', (err, data)=>{
//     if(err) throw new err
//     console.log(data)
// });

// const rfs = fs.readFileSync('test.txt', 'utf8');
// console.log(rfs)
// console.log("hellooo")

// fs.unlink('message.txt', (err) => {
//   if (err) throw err;
//   console.log('file was deleted');
// });

// create server            (with node.js)

// const http = require("node:http");
// const server = http.createServer((err, res)=>{
//     res.writeHead(200,{
//         "content-type": "text/plain"
//     })
//     res.end("Hello world, This is my first node.js server")
// })

// server.listen(3000,()=>{
//     console.log(`server is sucessfully running at ${port}`)
// })

// create server            (with express.js)

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const db = require("./db");
require("dotenv").config();

app.use(express.json());

const persons = require('./routes/persons');
const menuItems = require('./routes/menuItems');

app.use('/', persons);
app.use('/', menuItems);


app.get("/", (req, res) => {
  res.send("Hello World, Welcome to my Server");
});

app.get("/pardeep", (req, res) => {
  let intro = {
    name: "Pardeep Sharma",
    age: 22,
    Education: "B.COM (Bachelor of Commerce) from KUK",
    isFullStackDev: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9myIhZ5ywkZrExG3li_oYOpM11l8g950KceefQybEGF9VQv96vLeyHWEA&s=10",
  };
  res.send(intro);
});
app.get("/aniket", (req, res) => {
  let intro = {
    name: "Aniket Sharma",
    age: 22,
    Education: "12th from HBSE",
    isFullStackDev: true,
    image: "https://backiee.com/static/wallpapers/1000x563/386745.jpg",
  };
  res.send(intro);
});
app.get("/company", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/company.html"));
});



app.listen(port, () => {
  console.log(`sever is successfully listening on port ${port}`);
});
