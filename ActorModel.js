const http = require("http");

class Actor {
  send(msg){ setTimeout(()=>console.log("Msg:",msg),0); }
}
const actor=new Actor();

http.createServer((req,res)=>{
  actor.send(req.url);
  res.end("Actor Message Sent");
}).listen(5000);
