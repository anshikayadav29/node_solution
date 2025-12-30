const http = require('http');

http.createServer((req, resp) => {
    resp.end("hello");
}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
