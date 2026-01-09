// dns-lookup.js
const dns = require("dns");

dns.lookup("google.com", (err, address) => {
  console.log(address);
});
