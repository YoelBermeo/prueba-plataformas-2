// DATABASE.JS
const mongoose = require('mongoose'); 
const URI = 'mongodb://127.0.0.1:27017/db_usuarios';

mongoose.connect(URI, { dbName: 'db_usuarios' })
  .then(db => console.log('BD conectada'))
  .catch(err => console.error(err));

module.exports = mongoose;
