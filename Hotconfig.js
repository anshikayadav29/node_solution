// hot-config.js
const fs=require("fs");
fs.watch("config.json",()=>console.log("Config changed"));
