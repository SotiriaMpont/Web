const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    roles: [
      {
        type: String,
      },
    ],
  },
  "User"
);

module.exports = User;
