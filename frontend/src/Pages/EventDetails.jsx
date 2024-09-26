import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventService";
import { BookingForm } from "../Components/Booking/BookingForm";
import { MdClose } from "react-icons/md";
import { FiShare2 } from "react-icons/fi"; // Importing the share icon
import toast from "react-hot-toast";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("Failed to fetch event. Please try again later.");
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: `Check out this event: ${event.title}`,
          url: window.location.href,
        });
        toast.success("Event shared successfully!");
      } catch (error) {
        console.error("Error sharing the event:", error);
      }
    } else {
      toast.error("Share feature is not supported in your browser.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div className="container mx-auto p-6 pt-24 max-w-4xl">
      {/* Event Image */}
      {event.image && (
        <div className="mb-8">
          <img
            src={`${import.meta.env.VITE_API_URL}${event.image}`}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Event Header */}
      <header className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-8 rounded-lg mb-8 shadow-lg flex justify-between items-start">
        <div>
          <h1 className="text-5xl font-extrabold drop-shadow-sm">
            {event.title}
          </h1>
          <p className="text-xl mt-4">
            {event.date && event.date.split("T")[0]}&nbsp;&{" "}
            {event.time || "All day"}
          </p>
          <p className="text-xl mt-2">{event.location}</p>
        </div>
        {/* Share Icon */}
        <button
          className="bg-white text-sky-500 p-2 rounded-full hover:bg-sky-100 transition duration-300"
          onClick={handleShare}
          title="Share Event"
        >
          <FiShare2 size={24} />
        </button>
      </header>

      {/* Event Description */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Event Description</h2>
        <p className="text-gray-800 leading-relaxed">{event.description}</p>
      </section>

      {/* Event Schedule */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Event Schedule</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {event?.schedule?.length > 0 ? (
            event.schedule.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>No schedule available.</p>
          )}
        </ul>
      </section>

      {/* Location Map */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center">
          {/* Replace with actual map embed */}
          <p className="text-gray-500">Map Placeholder</p>
        </div>
      </section>

      {/* Organizer Contact Information */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Organizer Contact Information
        </h2>
        <p className="text-gray-800">
          <strong>Name:</strong> {event.organizer?.name || "N/A"}
        </p>
        <p className="text-gray-800">
          <strong>Email:</strong> {event.organizer?.email || "N/A"}
        </p>
        <p className="text-gray-800">
          <strong>Phone:</strong> {event.organizer?.phone || "N/A"}
        </p>
      </section>

      {/* Book Now Button */}
      <div className="text-center w-full">
        <button
          className="bg-gradient-to-r from-sky-500 to-sky-600 w-full text-white px-8 py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01]"
          onClick={() => setIsModalOpen(true)}
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 p-5 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            <BookingForm eventId={event._id} setIsModalOpen={setIsModalOpen} />
            <MdClose
              className="absolute right-2 top-2 cursor-pointer text-red-500 drop-shadow-lg hover:text-red-600 transition duration-300"
              onClick={() => setIsModalOpen(false)}
              size={24}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
