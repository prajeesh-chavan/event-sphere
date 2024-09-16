// src/Components/UpdateEventForm.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventById, updateEvent } from "../../services/eventService";
import toast from "react-hot-toast";

const UpdateEventForm = () => {
  const { eventId } = useParams(); // Get the event ID from the route
  const userId = localStorage.getItem("userId");
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    schedule: [],
    organizer: {
      name: "",
      email: "",
      phone: "",
    },
    eventOrganizerId: userId,
    image: null, // For the new image file
  });
  const [loading, setLoading] = useState(true);
  const [existingImage, setExistingImage] = useState(null); // Store existing image URL
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false); // State to toggle between view and edit modes

  useEffect(() => {
    // Fetch the existing event data
    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setEventData({
          ...data,
          eventOrganizerId: userId, // Ensure the organizer ID is set
          image: null, // Reset image in case user wants to upload a new one
        });
        setExistingImage(data.image); // Assuming 'image' is the URL of the existing image
        setLoading(false);
      } catch (err) {
        setError("Error fetching event data");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("organizer")) {
      const [_, key] = name.split(".");
      setEventData({
        ...eventData,
        organizer: {
          ...eventData.organizer,
          [key]: value,
        },
      });
    } else if (name === "image") {
      // Handle image file change
      setEventData({
        ...eventData,
        image: e.target.files[0], // Store the new image file
      });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleScheduleChange = (index, value) => {
    const newSchedule = [...eventData.schedule];
    newSchedule[index] = value;
    setEventData({ ...eventData, schedule: newSchedule });
  };

  const addScheduleItem = () => {
    setEventData({ ...eventData, schedule: [...eventData.schedule, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      for (const key in eventData) {
        if (eventData.hasOwnProperty(key)) {
          if (key === "organizer") {
            for (const subKey in eventData.organizer) {
              formData.append(
                `organizer.${subKey}`,
                eventData.organizer[subKey]
              );
            }
          } else if (key === "schedule") {
            // Append schedule items individually
            eventData.schedule.forEach((item, index) => {
              formData.append(`schedule[${index}]`, item);
            });
          } else if (key === "image") {
            if (eventData.image) {
              // If a new image was selected, append it
              formData.append("image", eventData.image);
            }
            // If no new image was selected, the existing image remains
          } else {
            formData.append(key, eventData[key]);
          }
        }
      }

      const response = await updateEvent(eventId, formData); // Adjust service to handle FormData
      toast.success("Event updated successfully");
      console.log("Event updated:", response);
      setEditMode(false); // Switch to view mode after update
    } catch (error) {
      console.error(
        "Error updating event:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container p-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">
          {editMode ? "Update Event" : "Event Details"}
        </h1>
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-blue-500 h-12 text-white px-4 py-2 rounded"
        >
          {editMode ? "Cancel" : "Edit Event"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Event Image */}
        {/* Event Image */}
        <div className="mb-4">
          <label className="block text-gray-700">Event Image</label>
          {existingImage && !eventData.image && (
            <div className="mb-2">
              <img
                src={`http://localhost:5000${existingImage}`}
                alt="Event"
                className="w-64 h-40 object-cover"
              />
            </div>
          )}
          {editMode&&(<input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />)}
          {eventData.image && (
            <div className="mt-2 text-sm text-green-600">
              Selected file: {eventData.image.name}
            </div>
          )}
        </div>


        {/* Event Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {/* Schedule */}
        <div className="mb-4">
          <label className="block text-gray-700">Schedule</label>
          {eventData.schedule.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleScheduleChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
              disabled={!editMode}
            />
          ))}
          {editMode && (
            <button
              type="button"
              onClick={addScheduleItem}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              disabled={!editMode}
            >
              Add Schedule Item
            </button>
          )}
        </div>

        {/* Organizer Details */}
        <div className="mb-4">
          <label className="block text-gray-700">Organizer Name</label>
          <input
            type="text"
            name="organizer.name"
            value={eventData.organizer.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Organizer Email</label>
          <input
            type="email"
            name="organizer.email"
            value={eventData.organizer.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Organizer Phone</label>
          <input
            type="text"
            name="organizer.phone"
            value={eventData.organizer.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
            disabled={!editMode}
          />
        </div>

        {editMode && (
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Event
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateEventForm;
