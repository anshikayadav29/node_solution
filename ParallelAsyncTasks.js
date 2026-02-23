const http = require("http");

http.createServer(async (_,res)=>{
  const a=Promise.resolve(1);
  const b=Promise.resolve(2);
  const [x,y]=await Promise.all([a,b]);
  res.end("Sum: "+(x+y));
}).listen(5000);
