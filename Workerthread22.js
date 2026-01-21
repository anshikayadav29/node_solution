const http=require("http");
const {Worker}=require("worker_threads");

http.createServer((req,res)=>{
  new Worker(`while(true){}`,{eval:true});
  res.end("Worker Started");
}).listen(5000);
