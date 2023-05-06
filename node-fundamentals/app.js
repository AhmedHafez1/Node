const http = require('http');
const { createReadStream } = require('fs');

http
  .createServer((request, response) => {
    const stream = createReadStream('./content/big-file.txt', {
      encoding: 'utf8',
    });
    stream.on('open', () => stream.pipe(response));
  })
  .listen(5000, () => console.log('Server running at 5000'));
