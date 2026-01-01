const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/login") {
    res.end("Login Page");
  } else if (req.url === "/register") {
    res.end("Register Page");
  } else {
    res.end("Welcome User");
  }
}).listen(5009);

console.log("Server running on 5009");
