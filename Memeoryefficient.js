// log-stream.js
const fs = require("fs");
const readline = require("readline");

async function stream(file) {
  const rl = readline.createInterface({
    input: fs.createReadStream(file)
  });

  for await (const line of rl) {
    console.log(line);
  }
}
