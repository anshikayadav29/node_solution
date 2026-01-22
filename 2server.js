const http = require('http');

http.createServer((req, resp) => {
    resp.write("this is Anil sidhu\n");
    resp.end("hello");
}).listen(4800, () => {
    console.log("Server running on http://localhost:4800");
});
