const mongoose = require("mongoose");

const User = mongoose.model(
  'User',
  {
    email: { type: String },
    username: { type: String },
    password: { type: String },
    roles: [
      {
        type: String
      }
    ],
    krousma: {
      thetikos: { type: String },
      date: { type: Date }
  },
  }
  , 'User'
);

module.exports = User;