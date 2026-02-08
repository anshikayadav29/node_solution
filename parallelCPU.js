const http = require("http");

function work() {
  return new Promise(r => {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    r(sum);
  });
}

http.createServer(async (req, res) => {
  const result = await Promise.all([work(), work()]);
  res.end("Done " + result.length);
}).listen(5000);
