const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
  const w = fs.createWriteStream("upload.bin");
  req.pipe(w);
  req.on("end",()=>res.end("Uploaded"));
}).listen(5000);
