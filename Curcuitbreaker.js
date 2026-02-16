const http = require("http");

let failures = 0;
let open = false;

http.createServer((req, res) => {
  if (open) return res.end("Circuit Open");

  try {
    if (Math.random() < 0.5) throw "Fail";
    failures = 0;
    res.end("Success");
  } catch {
    failures++;
    if (failures >= 3) open = true;
    res.end("Failure");
  }
}).listen(5000);
