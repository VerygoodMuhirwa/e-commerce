const User = require("../models/User");

module.exports = {
  addUser: async (req, res) => {
    const newUser = new User(req.body);
    try {
      await newUser.save();
      res.status(200).json("User Add Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json("failed to get users");
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Failed to login");
    }
  },
};
