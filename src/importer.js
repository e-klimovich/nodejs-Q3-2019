const csvjson = require('csvjson');
const fs = require('fs');
const { promisify } = require('util');

module.exports = class Importer {
  listen(watcher, { isSync = true }) {
    console.log(isSync);
    watcher.watch('./data', 1000);
    watcher.on('change', (filePath) => {
      isSync
        ? this.importSync(filePath)
        : this.importAsync(filePath)
    })
  }

  importSync(filePath) {
    try {
      const content = fs.readFileSync(filePath);
      console.log(
        csvjson.toObject(content.toString())
      );
      return true;
    } catch(error) {
      console.log(error);
      return false;
    }
  }

  importAsync(filePath) {
    try {
      const readFileAsync = promisify(fs.readFile);
      readFileAsync(filePath).then((content) => {
        console.log(
          csvjson.toObject(content.toString())
        );
      });
      return true;
    } catch(error) {
      console.log(error);
      return false;
    }
  }
}