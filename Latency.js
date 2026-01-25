const http=require("http");

http.createServer((req,res)=>{
  const d = req.url.includes("slow") ? 2000 : 0;
  setTimeout(()=>res.end("OK"),d);
}).listen(5000);
