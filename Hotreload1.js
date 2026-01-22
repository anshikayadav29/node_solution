const http=require("http");
let mode="A";

setInterval(()=> mode = mode==="A"?"B":"A", 3000);

http.createServer((req,res)=>{
  res.end("Mode: "+mode);
}).listen(5000);
