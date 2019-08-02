const fs = require('fs');

module.exports = class DirWatcher {
  watch(path, interval) {
    setTimeout(() => {
      console.log(`Start watching on '${path}' folder!`);

      fs.watch(path, (eventType, filename) => {
        console.log(`${filename} changed (${eventType})`);
      })
    }, interval)
  }
}
