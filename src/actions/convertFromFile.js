import fs from 'fs';
import csvjson from 'csvjson';

export default (path) => fs.readFile(path, {}, (err, data) => {
  if (err) {
    throw Error(err)
  }

  const json = csvjson.toObject(data.toString())

  fs.writeFile('./data.json', json.toString(), (err) => {
    if (err) {
      throw Error(err)
    }
  })
})
