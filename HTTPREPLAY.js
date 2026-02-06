const http = require("http");
let last="";

http.createServer((req,res)=>{
  if(req.url==="/last") res.end(last);
  else { last=req.url; res.end("Saved"); }
}).listen(5000);
