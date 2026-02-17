const http = require("http");

const program = ["PUSH 5","PUSH 3","ADD","PRINT"];
let stack = [];

function run() {
  for (let i of program) {
    const [op,val] = i.split(" ");
    if (op==="PUSH") stack.push(+val);
    if (op==="ADD") stack.push(stack.pop()+stack.pop());
  }
  return stack.pop();
}

http.createServer((_,res)=>res.end("VM OUT: "+run())).listen(5000);
