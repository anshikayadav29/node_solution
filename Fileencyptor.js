// encrypt.js
const crypto = require("crypto");

const cipher = crypto.createCipher("aes-256-ctr", "secret");
let encrypted = cipher.update("NodeJS", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);
