const documentSchema = new mongoose.Schema({
  filename: String,
  uuid: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  lastViewedAt: {
    type: Date
  }
});
