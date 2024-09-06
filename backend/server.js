const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Add this line
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // Add this line

const PORT = process.env.PORT || 5000;  
const JWT_SECRET = process.env.JWT_SECRET;
const uri = process.env.MONGODB_URI;
// MongoDB Connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  let user = await User.findOne({ username });
  if (user) return res.status(400).send("User already exists");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  user = new User({ username, password: hashedPassword });
  await user.save();

  res.send("User registered");
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Invalid credentials");

  // Validate password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid credentials");

  // Generate JWT Token
  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  res.header("auth-token", token).send({ token });
});

// Protected Route
app.get("/protected", verifyToken, (req, res) => {
  res.send("This is a protected route");
});

// Middleware to verify JWT Token
function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
}

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
