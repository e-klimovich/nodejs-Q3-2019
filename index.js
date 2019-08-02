const DirWatcher = require('./src/dir-watcher');

const w = new DirWatcher();

w.watch('./data', 2000);

