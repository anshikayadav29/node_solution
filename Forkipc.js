// ipc.js
const { fork } = require("child_process");
if(process.argv[2]){
  process.send("Hello Parent");
}else{
  const c = fork(__filename, ["child"]);
  c.on("message", console.log);
}
