const express = require('express');
const app = express();
const users = require('./routes/users');
const requestTime = (req,res,next)=>{
    req.requestTime = Date.now();
    next();
}
//response with hello world when in the home page
app.use(requestTime);
app.use('/users',users);
app.get("/", (req,res)=>{
    res.send("Hello World");
})
app.get("/getTime",(req,res)=>{
    let responseText = "Hello <br>";
    responseText += "The time is " + req.requestTime;
    res.send(responseText);
})
app.get("/about",(req,res)=>{
    res.send("You're in the /about");
})
app.get("*",(req,res)=>{
    res.send("There nothing here, noob!");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})