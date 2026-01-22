const http = require("http");
const EventEmitter = require("events");
const bus = new EventEmitter();

bus.on("ping", res => res.end("PONG"));

http.createServer((req,res)=>{
  if(req.url==="/ping") bus.emit("ping", res);
  else res.end("Idle");
}).listen(5000);
