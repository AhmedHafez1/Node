const { createReadStream } = require('fs');

const stream = createReadStream('./content/big-file.txt', {
  highWaterMark: 80,
  encoding: 'utf8',
});

stream.on('data', (chunk) => console.log(chunk));
