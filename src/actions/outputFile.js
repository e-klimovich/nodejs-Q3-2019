import fs from 'fs';

export default (path) => fs.readFile(path, {}, (err, data) => {
  if (err) {
    throw Error(err)
  }

  process.stdout.write(data);
})
