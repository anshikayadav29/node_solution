const http = require("http");
let history = [{count:0}];

http.createServer((req,res)=>{
  const last = history.at(-1);
  history.push({count: last.count + 1});
  res.end("Count: " + history.at(-1).count);
}).listen(5000);
