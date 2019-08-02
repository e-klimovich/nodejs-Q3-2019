const fs = require('fs');
const events = require('events');

module.exports = class DirWatcher extends events.EventEmitter {
  watch(path, interval) {
    console.log(`Filewatcher starts after ${interval}ms...`);

    setTimeout(() => {
      console.log(`Start watching '${path}' folder!`);

      fs.watch(path, (eventType, filename) => {
        this.emit('change', `${path}/${filename}`);
      })
    }, interval)
  }
}
