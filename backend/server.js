const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Event = require("./models/Event");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: "uploads/" });

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
const uri = process.env.MONGODB_URI;

// MongoDB Connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// JWT Authentication Middleware
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

// Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  user = new User({ username, password: hashedPassword });
  await user.save();

  res.send("User registered");
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Invalid credentials");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  res.header("auth-token", token).send({ token });
});

// Event Creation Route
app.post(
  "/create-event",
  verifyToken,
  upload.single("image"),
  async (req, res) => {
    const { title, description, date, time, location, category } = req.body;
    const imagePath = req.file.path;

    const event = new Event({
      title,
      description,
      date,
      time,
      location,
      category,
      image: imagePath,
    });

    await event.save();
    res.send("Event created");
  }
);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
