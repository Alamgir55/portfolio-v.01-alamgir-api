
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, require: true },
  descriptionn: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
