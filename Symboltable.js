const http = require("http");
const table = {};

http.createServer((req,res)=>{
  const k=req.url.slice(1);
  table[k]=(table[k]||0)+1;
  res.end(JSON.stringify(table));
}).listen(5000);
