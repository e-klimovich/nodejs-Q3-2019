import fs from 'fs';

export default (path) => process.stdin.on('readable', () => {
  const str = String(process.stdin.read());

  fs.writeFile(path, str, (err) => {
    if (err) {
      throw Error(err)
    }
  })
})
