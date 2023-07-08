const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter the contact name"],
    },
    email: {
      type: String,
      require: [true, "Please enter the email"],
    },
    Phone: {
      type: String,
      require: [true, "Please enter the phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
