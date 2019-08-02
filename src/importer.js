const dirWatcher = require('./dir-watcher');

module.exports = class Importer {
  listen(watcher) {
    watcher()
  }

  // importAsync() {}
  // importSync() {}
}