// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   if (req.method === "GET" && req.url == "/") {
//     res.end("hello world");
//   }
// });

// server.listen(3001);


import e from "express";
const server = e();

server.get("/", (req, res) => {
    res.send("express page");
})


server.listen(3001);



