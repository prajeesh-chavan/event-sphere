// backend/config/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

MONGO_URI =
  "mongodb+srv://prajeeshchavan:23072004@event-sphere.vgb47.mongodb.net/?retryWrites=true&w=majority&appName=event-sphere";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
