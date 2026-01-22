const http=require("http");
const states=["IDLE","BUSY","WAIT"];
let i=0;

http.createServer((req,res)=>{
  res.end(states[i++ % states.length]);
}).listen(5000);
