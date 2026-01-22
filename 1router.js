const http=require("http");
const routes={
  "/a":()=> "Route A",
  "/b":()=> "Route B"
};

http.createServer((req,res)=>{
  res.end(routes[req.url]?.() || "404");
}).listen(5000);
