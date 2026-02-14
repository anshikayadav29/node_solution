const http = require("http");

const nodes=["A","B","C"];
function hash(key){ return nodes[key.charCodeAt(0)%nodes.length]; }

http.createServer((req,res)=>{
  res.end("Node:"+hash(req.url));
}).listen(5000);
