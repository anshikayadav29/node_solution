const http = require("http");
let votes = 0;

http.createServer((req,res)=>{
  votes++;
  res.end(votes >= 5 ? "Consensus" : "Waiting");
}).listen(5000);
