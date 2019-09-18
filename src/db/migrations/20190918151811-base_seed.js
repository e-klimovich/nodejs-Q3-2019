module.exports = {
  up(db) {
    return db.collection('users').updateOne({ name: 'Jon Snow' }, { $set: { name: 'Jon Targaryen' } })
  },

  down(db) {
    return db.collection('users').updateOne({ name: 'Jon Targaryen' }, { $set: { name: 'Jon Snow' } })
  }
};
