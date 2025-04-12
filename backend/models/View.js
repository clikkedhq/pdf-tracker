const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  uuid: String,
  ip: String,
  userAgent: String,
  timestamp: Date
});

module.exports = mongoose.model('View', viewSchema);
