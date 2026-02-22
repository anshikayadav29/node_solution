const http = require("http");
const docs = ["node js fast", "node server", "fast code"];

http.createServer((req,res)=>{
  const q = req.url.slice(1);
  res.end(docs.filter(d=>d.includes(q)).join(" | "));
}).listen(5000);
