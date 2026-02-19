const http = require("http");
const nodes = ["N1","N2","N3"];

function pick(key){
  return nodes[key.length % nodes.length];
}

http.createServer((req,res)=>{
  res.end("Node: "+pick(req.url));
}).listen(5000);
