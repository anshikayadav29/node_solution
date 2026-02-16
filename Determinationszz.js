const http = require("http");
const events = [];
let value = 0;

function replay(){
  value = 0;
  events.forEach(e => value += e);
}

http.createServer((req,res)=>{
  if(req.url==="/replay") replay();
  else events.push(1);
  res.end("Value: "+value);
}).listen(5000);
