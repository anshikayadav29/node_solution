// gateway.js
function route(req) {
  const map = { "/u":"user", "/o":"order" };
  return map[req] || "404";
}
