const http = require("http");
let fail = 0;

http.createServer((req, res) => {
  if (fail >= 3) return res.end("Service Down");

  try {
    if (Math.random() > 0.5) throw "Fail";
    res.end("Success");
  } catch {
    fail++;
    res.end("Failure");
  }
}).listen(5000);
