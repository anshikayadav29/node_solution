// router.js
const http = require("http");

http.createServer((req, res) => {
  const routes = {
    "/": "Home",
    "/about": "About Page",
    "/contact": "Contact Page"
  };
  res.end(routes[req.url] || "404");
}).listen(5000);
