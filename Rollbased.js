const http = require("http");

class User {
  access() { return "User Access"; }
}
class Admin extends User {
  access() { return "Admin Access"; }
}

http.createServer((req, res) => {
  const user = req.url === "/admin" ? new Admin() : new User();
  res.end(user.access());
}).listen(5000);
