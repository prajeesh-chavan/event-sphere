// eventSchema.js

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  image: { type: String, required: true }, // Image URL
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }, // Ensure time is a required string
  location: { type: String, required: true },
  description: { type: String, required: true },
  schedule: [String], // Array of strings for schedule
  organizer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  eventOrganizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
