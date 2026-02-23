const fs = require("fs");
const http = require("http");

fs.watch("test.txt",()=>console.log("File changed"));

http.createServer((_,res)=>res.end("Watching")).listen(5000);
