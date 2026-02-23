const http = require("http");
const cache={};

http.createServer((req,res)=>{
  if(cache.data && cache.exp>Date.now())
    return res.end(cache.data);
  cache.data="Fresh Data";
  cache.exp=Date.now()+2000;
  res.end(cache.data);
}).listen(5000);
