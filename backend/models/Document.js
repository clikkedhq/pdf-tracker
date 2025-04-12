const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  filename: String,
  uuid: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', documentSchema);
