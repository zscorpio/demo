const http = require("http");

const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello</title>
</head>
<body>
  <h1>Hello from Node.js</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(8000, () => {
  console.log("http://localhost:3000");
});