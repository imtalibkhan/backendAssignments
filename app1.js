const express = require("express");

const users = require("./users.json");

const app = express();
//const app = express();

app.use(express.json())  // middlewear




app.get("/",(req,res)=>{ 
    res.send({users});
    res.end();
})

app.get("/",(req,res)=>{ 
    res.send("welcome to home page");
    res.end();
})

app.listen(2349, function () {
    console.log("listening on port 2346");  
})





