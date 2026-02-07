const http=require("http");
let cache={};

http.createServer((req,res)=>{
  cache[req.url]=Date.now();
  if(Object.keys(cache).length>3)
    delete cache[Object.keys(cache)[0]];
  res.end(JSON.stringify(cache));
}).listen(5000);
