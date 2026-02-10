const http = require("http");

const routes = {
  "/": () => "Home",
  "/about": () => "About",
  "/user": () => "User"
};

http.createServer((req, res) => {
  res.end(routes[req.url]?.() || "404");
}).listen(5000);
