const fs = require('fs');

for (let index = 0; index < 100000; index++) {
  fs.writeFileSync(
    './content/big-file.txt',
    `Heloooooooooooooooooo ${index}\n`,
    {
      flag: 'a',
    }
  );
}
