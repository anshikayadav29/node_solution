const http=require("http");

http.createServer((req,res)=>{
  res.end(Buffer.from([65,66,67]));
}).listen(5000);
