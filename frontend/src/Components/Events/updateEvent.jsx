import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router-dom
import { getEventById, updateEvent } from "@/services/eventService"; // Import event service
import toast from "react-hot-toast";
import Ticket from "../TicketList";
import { getBookings } from "@/services/bookingService";

function UpdateEventForm() {
  const { eventId } = useParams(); // Get the event ID from the route
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    ticketsAvailable: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditable, setIsEditable] = useState(false); // Toggle to switch between view and edit modes
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch event data using eventService when the component loads
    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setEventData(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching event data");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getBookings(eventId);
      setTickets(data);
      setLoading(false);
    };

    fetchTickets();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(eventId, eventData);
      toast.success("Event updated successfully");
      setIsEditable(false); // Disable edit mode after successful update
    } catch (err) {
      console.error("Error updating event", err);
    }
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable); // Toggle between editable and read-only
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Event Details</h1>
        <button
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleEdit}
        >
          {isEditable ? "Cancel Edit" : "Edit Event"}
        </button>
      </div>
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
            disabled={!isEditable} // Disable input if not editable
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
            disabled={!isEditable} // Disable input if not editable
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
            disabled={!isEditable} // Disable input if not editable
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
            disabled={!isEditable} // Disable input if not editable
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600">Tickets Available</label>
          <input
            type="number"
            className="mt-1 w-full p-2 border rounded"
            value={eventData.ticketsAvailable}
            onChange={(e) =>
              setEventData({
                ...eventData,
                ticketsAvailable: e.target.value,
              })
            }
            disabled={!isEditable} // Disable input if not editable
          />
        </div>

        {isEditable && (
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Update Event
          </button>
        )}
      </form>
      {!isEditable&&(<div className="mt-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Tickets</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Ticket tickets={tickets} />
        </div>
      </div>)}
    </div>
  );
}

export default UpdateEventForm;
