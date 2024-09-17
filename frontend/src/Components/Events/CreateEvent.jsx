// src/Components/CreateEvent.js
import React, { useState } from "react";
import { createEvent } from "../../services/eventService";
import toast from "react-hot-toast";

const CreateEvent = () => {
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
    image: null, // New field for image
  });

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
        image: e.target.files[0], // Store the file object
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
          } else {
            formData.append(key, eventData[key]);
          }
        }
      }

      const response = await createEvent(formData); // Adjust service to handle FormData
      toast.success("Event created successfully");
      console.log("Event created:", response);
      // Reset form to initial state
      setEventData({
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
        image: null,
      });
    } catch (error) {
      console.error(
        "Error creating event:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">
        Create New Event
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Event Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>
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
            />
          ))}
          <button
            type="button"
            onClick={addScheduleItem}
            className="mt-2 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition duration-300"
          >
            Add Schedule Item
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Organizer Name</label>
          <input
            type="text"
            name="organizer.name"
            value={eventData.organizer.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
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
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
