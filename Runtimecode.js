const http = require("http");
const vm = require("vm");

http.createServer((req, res) => {
  const script = new vm.Script("2 + 3");
  const result = script.runInNewContext({});
  res.end("Result: " + result);
}).listen(5000);
