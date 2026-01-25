const http=require("http");
const map={};

http.createServer((req,res)=>{
  map[req.url]=(map[req.url]||0)+1;
  res.end(JSON.stringify(map));
}).listen(5000);
