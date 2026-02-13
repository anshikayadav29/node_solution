const http = require("http");

class Template {
  execute(res) {
    this.start(res);
    this.process(res);
    this.end(res);
  }
  start() {}
  process() {}
  end() {}
}

class Page extends Template {
  start(res){ res.write("Start "); }
  process(res){ res.write("Process "); }
  end(res){ res.end("End"); }
}

http.createServer((r,res)=>new Page().execute(res)).listen(5000);
