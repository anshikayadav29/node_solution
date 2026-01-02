const http = require("http");

http.createServer((req, res) => {
  switch(req.url){
    case "/":
      res.end("Home");
      break;
    case "/about":
      res.end("About");
      break;
    default:
      res.end("404 Page");
  }
}).listen(5000);
