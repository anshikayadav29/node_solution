// readable.js
const {Readable}=require("stream");
const r=new Readable({read(){this.push("data");this.push(null)}});r.pipe(process.stdout);
