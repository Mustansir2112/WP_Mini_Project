const User = require("../models/user");

exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.bids = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("bids");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ bids: user.bids || [] });
  } catch (err) {
    console.error("Bids error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
