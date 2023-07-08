const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add the name"],
    },
    email: {
      type: String,
      require: [true, "Please enter the email"],
      unique: [true, "Email address already teken"],
    },
    password: {
      type: String,
      require: [true, "Please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
