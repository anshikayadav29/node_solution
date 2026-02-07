const http=require("http");
const secret=Symbol();

http.createServer((req,res)=>{
  const obj={[secret]:123};
  res.end(obj[secret].toString());
}).listen(5000);
