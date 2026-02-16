const http = require("http");
let leader = false;

setTimeout(() => leader = true, 3000);

http.createServer((req, res) => {
  res.end(leader ? "I am Leader" : "Follower");
}).listen(5000);
