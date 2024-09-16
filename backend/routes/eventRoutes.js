const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");

router.post("/create-event", upload.single("image"), createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.put("/:id", upload.single("image"), authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;
