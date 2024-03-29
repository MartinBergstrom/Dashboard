const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = Credentials = mongoose.model("credentials", CredentialsSchema);
