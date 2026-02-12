const http = require("http");

class Handler {
  setNext(h){this.next=h; return h;}
  handle(req,res){ this.next?.handle(req,res);}
}
class Auth extends Handler {
  handle(req,res){ req.url==="/secure"?res.end("Auth"):super.handle(req,res);}
}
class Default extends Handler {
  handle(req,res){res.end("Public");}
}

const auth=new Auth();
auth.setNext(new Default());

http.createServer((r,res)=>auth.handle(r,res)).listen(5000);
