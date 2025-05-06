const mongoose = require('mongoose');

const WatchListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Watchlist', WatchListSchema);
