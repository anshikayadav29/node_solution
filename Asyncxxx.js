const http = require("http");
let locked=false;

http.createServer((req,res)=>{
  if(locked) return res.end("Locked");
  locked=true;
  setTimeout(()=>locked=false,2000);
  res.end("Access");
}).listen(5000);
