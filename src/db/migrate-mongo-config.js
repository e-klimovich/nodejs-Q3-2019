require('dotenv').config();

const config = {
  mongodb: {
    url: `mongodb://localhost:${process.env.DB_PORT || 27017}`,
    databaseName: process.env.DB_NAME || 'node',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog"
};

module.exports = config;
