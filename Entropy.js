const http=require("http");

http.createServer((r,s)=>{
  const set=new Set(r.url);
  s.end("Entropy "+set.size);
}).listen(5000);
