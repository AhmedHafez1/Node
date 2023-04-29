const path = require('path');

const filePath = path.join(__dirname, './content/text/test.text');

const absolutePath = path.resolve(__dirname, './content/text/test.text');

console.log(filePath);
console.log(path.basename(filePath));

console.log(absolutePath);
console.log(path.basename(absolutePath));
