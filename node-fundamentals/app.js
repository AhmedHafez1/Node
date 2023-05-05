const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Beutiful');
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
