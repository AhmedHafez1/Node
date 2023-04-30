const { readFile, writeFile } = require('fs');

readFile('./content/file1.txt', 'utf8', (err, text1) => {
  if (err) {
    console.error(err);
    return;
  }
  readFile('./content/file2.txt', 'utf8', (err, text2) => {
    if (err) {
      console.error(err);
      return;
    }

    writeFile(
      './content/result-async.txt',
      `The result: ${text1}, ${text2}\n`,
      { flag: 'a' },
      () => {}
    );
  });
});
