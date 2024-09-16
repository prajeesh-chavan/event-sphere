import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    ticketsAvailable: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/events/create", eventData).then((response) => {
      console.log("Event created successfully");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Create Event</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <div>
          <label className="block text-gray-600">Event Title</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded"
            value={eventData.title}
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-600">Date</label>
          <input
            type="date"
            className="mt-1 w-full p-2 border rounded"
            value={eventData.date}
            onChange={(e) =>
              setEventData({ ...eventData, date: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-600">Location</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded"
            value={eventData.location}
            onChange={(e) =>
              setEventData({ ...eventData, location: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-600">Description</label>
          <textarea
            className="mt-1 w-full p-2 border rounded"
            value={eventData.description}
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600">Tickets Available</label>
          <input
            type="number"
            className="mt-1 w-full p-2 border rounded"
            value={eventData.ticketsAvailable}
            onChange={(e) =>
              setEventData({ ...eventData, ticketsAvailable: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
