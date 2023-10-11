const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  addUser: async (req, res) => {
    try {
      const password = req.body.password;
      if (await User.findOne({ email: req.body.email })) {
        res.status(500).json("The user already exists");
      } else {
        bcrypt.hash(password, 10).then((hashedPassword) => {
          const newUser = new User({ ...req.body, password: hashedPassword });
          newUser.save();
        });
        res.status(200).json("The user was successfully added");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  loginUser: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const userEmail = await User.findOne({ email: email });
      if (userEmail) {
        if (await bcrypt.compare(password, userEmail.password)) {
          res.status(200).json("Logged in successfully");
        } else {
          res.status(200).json("Incorrect Password");
        }
      } else {
        res.status(200).json("Invalid Email");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
