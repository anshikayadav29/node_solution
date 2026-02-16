const http = require("http");
const nodes = ["A","B","C"];
let index = 0;

http.createServer((req,res)=>{
  const node = nodes[index++ % nodes.length];
  res.end("Node: " + node);
}).listen(5000);
