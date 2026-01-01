const http = require("http");

http.createServer((req, res) => {
  let a = 10, b = 5;
  res.end("Sum is: " + (a + b));
}).listen(5007);

console.log("Server running on 5007");
