const mongoose = require("mongoose");

const UrlCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fullUrl: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UrlCard = mongoose.model("urlCard", UrlCardSchema);
