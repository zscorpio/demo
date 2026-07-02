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
const url = new URL(req.url, "http://localhost:3000");
  const pathname = url.pathname;

  if (pathname === "/20250321") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta content="点击一下咨询" property="og:title" />
  <meta content="联系我们" property="og:description" />
  <meta content="https://oss.zidonghuifu.com/assets/common/card.jpg"
        property="og:image" />
  <base href="https://oss.zidonghuifu.com/assets/static/v3/">
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  <meta content="IE=edge" http-equiv="X-UA-Compatible" />
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
  <title></title>
</head>

<body>
<div id="app"></div>

<script>
  
  // 动态创建script标签并添加时间戳
  var script = document.createElement('script');
  script.src = 'landing.js?v=' + new Date().getTime();
  document.body.appendChild(script);

</script>
</body>

</html>
    `);
    return;
  }

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(homeHtml);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

server.listen(8000, () => {
  console.log("http://localhost:3000");
});
