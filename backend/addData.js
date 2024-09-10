const mongoose = require("mongoose");
const Event = require("./models/Event");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Add event to insert
    const sampleEvents = [];

    Event.insertMany(sampleEvents)
      .then(() => {
        console.log("Sample data inserted successfully");
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error inserting sample data:", error);
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
