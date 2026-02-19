const http = require("http");

function render(tpl, data){
  return tpl.replace(/\{\{(\w+)\}\}/g,(_,k)=>data[k]||"");
}

http.createServer((_,res)=>{
  res.end(render("Hello {{name}}", {name:"Node"}));
}).listen(5000);
