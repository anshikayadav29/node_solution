const http = require("http");
const history = [];
let state = 0;

http.createServer((req,res)=>{
  if(req.url==="/back") state = history.pop() ?? state;
  else { history.push(state); state++; }
  res.end("State: "+state);
}).listen(5000);
