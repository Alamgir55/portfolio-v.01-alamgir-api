const config = require('../config/dev')
const mongoose = require('mongoose');

require('./models/portfolio')

exports.connect = () => {
  return mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, (err) => {
    if(err) {console.log(err)}
    else {
      console.log('Connected to DB')
    }
  })
}

