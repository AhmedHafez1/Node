const { readFile, writeFile } = require('fs').promises;
const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// With async/await
async function printText() {
  try {
    const firstText = await readFile('./content/file1.txt', 'utf8');
    const secondText = await readFile('./content/file2.txt', 'utf8');

    await writeFile(
      './content/result-async-patterns.txt',
      `Hello here is the data: ${firstText} ${secondText}\n`,
      { flag: 'a' }
    );
  } catch (error) {
    console.error(error);
  }
}

printText();

// const getText = (path) => {
//   return new Promise((res, rej) => {
//     readFile(path, 'utf8', (data, err) => {
//       if (err) rej(err);
//       else res(data);
//     });
//   });
// };

// With then/catch chaining
// getText('./content/file1.txt')
//   .then((text) => console.log(text))
//   .catch((err) => console.error(err));
