// ticket.js includes schema for ticket modelc and methods for ticket model
// Ticket model includes fields: event_id, user_id, created_at

const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Events",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
