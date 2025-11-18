const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  currentBid: { type: Number, default: 0 },
  endTime: { type: String },
  bids: { type: Number, default: 0 },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);
