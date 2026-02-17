const http = require("http");
let locked=false;

http.createServer((_,res)=>{
  if(locked) return res.end("Locked");
  locked=true;
  setTimeout(()=>locked=false,1000);
  res.end("Entered Critical Section");
}).listen(5000);
