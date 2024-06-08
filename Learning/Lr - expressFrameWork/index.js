const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    return res.send("this is home page");
})

app.get("/about", (req, res)=>{
    return res.send("this is about page" + " wassup " + req.query.name);
})

app.listen(9000, () => console.log("server initialized on : http://localhost:9000"));

// const myServer = http.createServer(app);
// myServer.listen(9000, () => console.log("server initialized on : http://localhost:9000"));