const http = require("http");

class Controller {
  handle(res){}
}

class UserController extends Controller {
  handle(res){ res.end("User"); }
}
class ProductController extends Controller {
  handle(res){ res.end("Product"); }
}

http.createServer((r,res)=>{
  const c = r.url==="/product" ? new ProductController() : new UserController();
  c.handle(res);
}).listen(5000);
