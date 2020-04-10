const express = require('express');
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>This is users page</h1>");
})
route.get("/infom",(req,res)=>{
    res.send("<h1>This is the users info page</h1>");
})

module.exports = route;