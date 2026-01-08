// fork.js
const { fork } = require("child_process");

if (process.argv[2] === "child") {
  process.send("Hello Parent");
} else {
  const child = fork(__filename, ["child"]);
  child.on("message", msg => console.log(msg));
}
