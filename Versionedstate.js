const http = require("http");
let v = 0;
const store = [];

http.createServer((req,res)=>{
  if(req.url==="/rollback") v=store.pop()??v;
  else store.push(v), v++;
  res.end("Version: "+v);
}).listen(5000);
