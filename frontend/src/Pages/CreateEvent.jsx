import React, { useState } from "react";
import axios from "axios";

function App() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("location", location);
    formData.append("image", image);

    await axios.post("http://localhost:5000/create-event", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("Event saved successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-24">
      <div className="max-w-xl mx-auto mt-24 p-12 bg-white rounded-lg border-2 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {preview && (
            <img
              src={preview}
              alt="Event Preview"
              className="w-full h-64 object-cover mt-4 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <div className="flex gap-4">
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
