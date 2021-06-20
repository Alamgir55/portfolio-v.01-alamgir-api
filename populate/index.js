const config = require('../config/dev')
const mongoose = require('mongoose');
const fakeDB = require('./FakeDB');

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, async (err) => {
    if(err) {console.log(err)}
    else {
      console.log('> Starting populating DB....');
      await fakeDB.populate();
      await mongoose.connection.close();
      console.log('> DB has been populated....');
    }
  })

