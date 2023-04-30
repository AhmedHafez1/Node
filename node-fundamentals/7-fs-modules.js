const { readFileSync, writeFileSync } = require('fs');

const text1 = readFileSync('./content/file1.txt', 'utf8');
const text2 = readFileSync('./content/file2.txt', 'utf8');

console.log(text1, text2);

writeFileSync('./content/result.txt', `The result: ${text1}, ${text2}\n`, {
  flag: 'a',
});
