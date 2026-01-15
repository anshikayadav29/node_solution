// token.js
const crypto = require("crypto");
function token() {
  return crypto.randomBytes(32).toString("hex");
}
