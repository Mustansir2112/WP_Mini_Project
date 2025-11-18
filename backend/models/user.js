const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  bids: [
    {
      itemId: String,
      itemTitle: String,
      category: String,
      amount: Number,
      endTime: String,
      status: String,
      placedAt: { type: Date, default: Date.now }
    }
  ],
  totalBids: { type: Number, default: 0 },
  wonAuctions: { type: Number, default: 0 },
  activeBids: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);