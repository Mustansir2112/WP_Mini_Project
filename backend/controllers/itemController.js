const User = require("../models/user");
// const Item = require("../models/item");

exports.placeBid = async (req, res) => {
  try {
    const userId = req.user;
    const { itemId, amount } = req.body;

    if (!itemId || !amount) return res.status(400).json({ message: "Missing itemId or amount" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const bid = {
      itemId: String(itemId),
      itemTitle: `Item ${itemId}`,
      category: "",
      amount,
      endTime: "",
      status: "winning",
      placedAt: new Date()
    };

    user.bids.push(bid);
    user.totalBids = (user.totalBids || 0) + 1;
    user.activeBids = (user.activeBids || 0) + 1;

    await user.save();

    return res.json({ message: "Bid placed", bid });
  } catch (err) {
    console.error("placeBid error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


// exports.newItem = async (req, res) => {
//     try{
//         const newItem = new Item(req.body);
//         await newItem.save();
//         console.log(savedItem);
//     }
//     catch(error){
//         console.error("newItem error:", err);
//         return res.status(500).json({ message: "Server error" });
//     }
// };