const http = require("http");

class Response {
  send(res){res.end("Base");}
}
class Decorator {
  constructor(r){this.r=r;}
  send(res){this.r.send(res);}
}
class Upper extends Decorator {
  send(res){res.end("BASE DECORATED");}
}

http.createServer((r,res)=>{
  new Upper(new Response()).send(res);
}).listen(5000);
