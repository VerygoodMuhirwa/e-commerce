const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    Image: {
      type: String,
      required: true,
      default: "userDefault.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
