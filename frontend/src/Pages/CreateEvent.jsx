import BlurFade from "@/Components/magicui/blur-fade";
import { Input } from "@/Components/ui/input";
import React, { useState } from "react";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here
    console.log("Event Created:", eventData);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-10 px-4 w-1/2">
      <h1 className="text-4xl font-bold text-center mb-8">
        Create a New Event
      {/* <BlurFade delay={0.25} inView>
      Create a New Event
          </BlurFade> */}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Event Title</label>

          <Input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter event title"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Event Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg"
            rows="5"
            placeholder="Enter event description"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium">Event Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Event Time</label>
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium">Event Location</label>
          <Input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter event location"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Event Category</label>
          <select
            name="category"
            value={eventData.category}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg"
            required
          >
            <option value="">Select category</option>
            <option value="Music">Music</option>
            <option value="Technology">Technology</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium">Event Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition duration-300"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
