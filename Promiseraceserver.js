const http=require("http");

http.createServer(async(req,res)=>{
  const p1=new Promise(r=>setTimeout(()=>r("A"),1000));
  const p2=new Promise(r=>setTimeout(()=>r("B"),500));
  res.end(await Promise.race([p1,p2]));
}).listen(5000);
