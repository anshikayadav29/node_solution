const http = require("http");

class Text { send(res){res.end("TEXT");}}
class Json { send(res){res.end(JSON.stringify({msg:"JSON"}));}}

http.createServer((req,res)=>{
  const strategy = req.url==="/json"?new Json():new Text();
  strategy.send(res);
}).listen(5000);
