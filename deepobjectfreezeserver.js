const http = require("http");

function deepFreeze(obj) {
  Object.values(obj).forEach(v => typeof v === "object" && deepFreeze(v));
  return Object.freeze(obj);
}

http.createServer((req, res) => {
  const data = deepFreeze({ a: { b: 1 } });
  res.end(JSON.stringify(data));
}).listen(5000);
