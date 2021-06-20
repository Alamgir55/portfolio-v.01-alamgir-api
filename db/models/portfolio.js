const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, require: true, maxlength: 128 },
  company: {type: String, require: true, maxlength: 64},
  companyWebsite: {type: String, require: true, maxlength: 128},
  location: {type: String, require: true},
  jobTitle: {type: String, require: true},
  description: { type: String, require: true },
  startDate: {type: Date, require: true},
  endDate: {type: Date},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
