const http = require("http");
const data = Array.from({length:100},(_,i)=>i);

http.createServer((req,res)=>{
  const p = Number(req.url.slice(1))||1;
  const page = data.slice((p-1)*10,p*10);
  res.end(page.join(","));
}).listen(5000);
