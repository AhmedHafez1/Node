const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((res, rej) => {
    readFile(path, 'utf8', (data, err) => {
      if (err) rej(err);
      else res(data);
    });
  });
};

// With then/catch chaining
getText('./content/file1.txt')
  .then((text) => console.log(text))
  .catch((err) => console.error(err));

// With async/await
async function printText() {
  try {
    const firstText = await getText('./content/file1.txt');
    console.log(firstText);
  } catch (error) {
    console.error(error);
  }
}

printText();
