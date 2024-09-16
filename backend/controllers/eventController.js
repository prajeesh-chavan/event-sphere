const Event = require("../models/Event");

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("organizer", "name");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  const {
    title,
    description,
    date,
    time,
    location,
    schedule,
    organizer,
    eventOrganizerId,
    eventDate,
  } = req.body;

  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : ""; // Get the image path if uploaded

    const event = new Event({
      title,
      description,
      date,
      time,
      location,
      schedule,
      organizer,
      eventOrganizerId,
      eventDate,
      image: imageUrl, // Save image URL to the event
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "organizer",
      "name"
    );
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const updatedData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : event.image, // Update image if new one is uploaded
    };

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
