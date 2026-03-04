const fs = require("fs");
const { Transform } = require("stream");

fs.createReadStream("data.csv")
.pipe(new Transform({
  transform(chunk,_,cb){
    const [a,b]=chunk.toString().trim().split(",");
    cb(null, JSON.stringify({a,b})+"\n");
  }
}))
.pipe(fs.createWriteStream("out.json"));
