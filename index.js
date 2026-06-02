const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "";
  if (req.url === "/" || req.url === "/index") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "contact-me.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else {
    filePath = path.join(__dirname, "404.html");
  }
  console.log(req.url);
  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error: Could not read index file.");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(8080, "localhost", () => {
  console.log(`Server running at http://localhost:8080/`);
});
