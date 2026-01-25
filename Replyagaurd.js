const http=require("http");
const seen=new Set();

http.createServer((req,res)=>{
  if(seen.has(req.url)) return res.end("Replay");
  seen.add(req.url);
  res.end("Fresh");
}).listen(5000);
