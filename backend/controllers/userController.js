const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  addUser: async (req, res) => {
    try {
      const password = req.body.password;
      if (await User.findOne({ email: req.body.email })) {
        res.status(500).json("The user already exists");
      } else {
        if (password.length >= 8) {
          bcrypt.hash(password, 10).then((hashedPassword) => {
            const newUser = new User({ ...req.body, password: hashedPassword });

            newUser.save();
            res.status(200).json("The user was successfully added");
          });
        } else {
          res.status(500).json("The password is to short");
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  loginUser: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.body.email });
      if (userEmail) {
        if (await bcrypt.compare(req.body.password, userEmail.password)) {
          res.status(200).json(userEmail);
        } else {
          res.status(500).json("Invalid Email or Password");
        }
      } else {
        res.status(500).json("Invalid Email or Password");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status.json("Failed to get user");
    }
  },
};
