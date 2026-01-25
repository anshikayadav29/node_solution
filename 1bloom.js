const http = require("http");
const bloom = new Array(50).fill(false);

http.createServer((req,res)=>{
  const i = req.url.length % bloom.length;
  if(bloom[i]) res.end("Probably Seen");
  else { bloom[i]=true; res.end("New Entry"); }
}).listen(5000);
