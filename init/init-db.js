const mongoose = require('mongoose');
const {
  url, usr, pwd, name,
} = require('../config/config').db;

mongoose.Promise = global.Promise;

const connect = async () => {
  console.info('Trying to establish connection to DB');
  const dbFullUrl = url
    .replace('{usr}', usr)
    .replace('{pwd}', pwd)
    .replace('{name}', name);

  console.debug(`Got DB connection string: ${dbFullUrl}`);

  await mongoose
    .connect(dbFullUrl,
      { useNewUrlParser: true })
    .then(() => console.info('Connection to database established.'));

  mongoose.connection.on('error', (err) => {
    console.error(err);
    throw new Error('Failed to establish connection to DB.');
  });
};

const close = async () => mongoose.connection.close();

module.exports = {
  connect,
  close,
};
