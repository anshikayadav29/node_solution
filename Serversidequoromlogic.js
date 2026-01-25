const http=require("http");
let votes=0;

http.createServer((req,res)=>{
  votes++;
  res.end(votes>=3?"Quorum Reached":"Waiting");
}).listen(5000);
