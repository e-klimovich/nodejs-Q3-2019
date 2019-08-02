const DirWatcher = require('./src/dir-watcher');
const Importer = require('./src/importer');

const watcher = new DirWatcher();
const importer = new Importer();

importer.listen(watcher, {
  isSync: false,
});
