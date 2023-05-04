const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
    return;
  }
  if (req.url === '/about') {
    res.end('About Page modified');
    return;
  }
  res.end(`<h1>Page not found</h1>`);
});

server.listen(5000);
