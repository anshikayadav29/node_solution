const http = require("http");
const bits = new Array(32).fill(0);

function hash(s){ return s.length % 32; }

http.createServer((req,res)=>{
  const h = hash(req.url);
  const exists = bits[h];
  bits[h] = 1;
  res.end(exists ? "Probably Seen" : "New");
}).listen(5000);
