// backend/controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const EMAIL = "cprajeesh33@gmail.com";
const EMAIL_PASSWORD = "gbru miez uyfy xpod";
const JWT_SECRET = process.env.JWT_SECRET;

// Register user
exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = await User.create({ username, email, password, role });
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const role = user.role;

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });
    res.status(200).json({ token, role, userId: user._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    const user = await User.findOne({
      _id: decoded.id,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    // Update password
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password has been reset" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL, // your email
    pass: EMAIL_PASSWORD, // your email password
  },
});

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create reset token
    const resetToken = jwt.sign({ id: user._id }, jwtConfig.secret, {
      expiresIn: "1h",
    });
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiration
    await user.save();

    // Send reset password email
    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;

    const mailOptions = {
      to: user.email,
      from: EMAIL,
      subject: "Password Reset Request",
      html: `
    <html>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background: #ffffff;  padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333333; text-align: center;">Password Reset Request</h2>
          <p style="font-size: 16px; color: #555555;">Hi ${
            user.name || "there"
          },</p>
          <p style="font-size: 16px; color: #555555;">We received a request to reset your password. Please click the button below to create a new password.</p>
          <p style="text-align: center;">
            <a href="${resetURL}" style="display: inline-block; padding: 10px 20px; margin-top: 10px; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #0ea5e9; text-decoration: none; border-radius: 4px;">Reset Password</a>
          </p>
          <p style="font-size: 14px; color: #777777; text-align: center;">If you did not request a password reset, please ignore this email.</p>
          <p style="font-size: 14px; color: #777777; text-align: center;">Thank you,<br>Event Sphere</p>
        </div>
      </body>
    </html>

  `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred while sending email: ", error.message); // Log the specific error
        return res.status(500).json({ message: "Error sending email" });
      }
      res.json({ message: "Password reset email sent" });
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
