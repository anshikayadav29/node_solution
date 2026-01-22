const http=require("http");
let store=[];

http.createServer((req,res)=>{
  store.push(new Array(1e5).fill("*"));
  res.end("Heap "+store.length);
}).listen(5000);
