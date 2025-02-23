import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { getUserBookings } from "@/services/bookingService";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getUserBookings();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // Added userId to the dependency array

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeModal = () => {
    setSelectedTicket(null);
  };

  if (loading) {
    return (
      <div className="h-full p-6 flex items-center justify-center">
        <div className="text-gray-700 text-xl">
          <Lottie animationData={loader} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full p-6 flex items-center justify-center">
        <div className="text-red-600 text-xl">Error: {error}</div>
      </div>
    );
  }

  const getCategoryIcon = (eventTitle) => {
    if (eventTitle.toLowerCase().includes("tech")) {
      return "💻"; // Tech icon
    } else if (eventTitle.toLowerCase().includes("art")) {
      return "🎨"; // Art icon
    } else {
      return "🎫"; // Default ticket icon
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-700">Your Tickets</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {tickets.length === 0 ? (
            <li className="text-gray-600">No tickets found.</li>
          ) : (
            tickets.map((ticket) => (
              <li
                key={ticket._id}
                className={`border-b pb-4 hover:scale-[1.01] transform transition-transform flex flex-col md:flex-row justify-between items-center cursor-pointer  p-4 rounded-lg ${
                  ticket.status === "pending"
                    ? "bg-yellow-100"
                    : ticket.status === "confirmed"
                    ? "bg-green-100"
                    : ticket.status === "cancelled"
                    ? "bg-red-100"
                    : ""
                }`}
                onClick={() => handleTicketClick(ticket)}
              >
                <div className="flex flex-col md:flex-row items-center md:space-x-4">
                  <div className="text-gray-600 font-semibold text-lg flex items-center">
                    <span className="mr-2">
                      {getCategoryIcon(ticket.event)}
                    </span>
                    {ticket.eventTitle}
                  </div>
                  <div className="text-sm text-gray-400">
                    Booked on {new Date(ticket.bookedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0 font-medium uppercase">
                  {ticket.status}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {selectedTicket && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative p-8 md:p-12 max-w-xl w-full bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ticket-container p-6 border border-gray-200 rounded-lg gap-12 flex">
              <div className="">
                <div className="ticket-header flex flex-col md:flex-row justify-between items-center mb-6">
                  <h2 className="text-3xl font-extrabold text-gray-800 flex items-center">
                    {selectedTicket.eventTitle}
                  </h2>
                </div>
                <div className="ticket-date text-sm text-gray-500">
                  {new Date(selectedTicket.bookedAt).toLocaleDateString()}
                </div>

                <div className="ticket-details flex justify-between mb-4">
                  <div>
                    <p className="text-gray-700">
                      Seat:
                      <span className="ml-1 font-semibold text-lg text-gray-900">
                        {selectedTicket.seatNumber}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <p className="text-gray-700">
                      Price:
                      <span className="ml-1 font-semibold text-lg text-gray-900">
                        ₹{selectedTicket.price || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ticket-qr text-center">
                <QRCode
                  size={150}
                  value={`https://event-sphere-seven.vercel.app/verify/${selectedTicket._id}`}
                  className="border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
            </div>

            <button
              className="absolute top-5 right-5 text-red-500 hover:text-red-700 transition-colors duration-300"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketList;
