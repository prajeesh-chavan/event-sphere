const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  description: String,
  date: String,
  time: String,
  location: String,
  imageUrl: String, // Add this line
});

module.exports = mongoose.model("Event", eventSchema);
