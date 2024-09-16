import React, { useState } from "react";
import { bookEvent } from "../../services/bookingService";
import toast from "react-hot-toast";

export const BookingForm = ({ eventId, setIsModalOpen }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [ticketDetails, setTicketDetails] = useState([
    { name: "", contactNumber: "", seatPreference: "" },
  ]);

  const userId = localStorage.getItem("userId");

  const seatOptions = ["Front Row", "Middle Row", "Back Row", "General"];

  const handleTicketChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDetails = [...ticketDetails];
    updatedDetails[index] = { ...updatedDetails[index], [name]: value };
    setTicketDetails(updatedDetails);
  };

  const handleNumberOfTicketsChange = (e) => {
    const newNumberOfTickets = Number(e.target.value);
    setNumberOfTickets(newNumberOfTickets);

    setTicketDetails((prevDetails) => {
      if (newNumberOfTickets > prevDetails.length) {
        return [
          ...prevDetails,
          ...Array(newNumberOfTickets - prevDetails.length).fill({
            name: "",
            contactNumber: "",
            seatPreference: "",
          }),
        ];
      } else {
        return prevDetails.slice(0, newNumberOfTickets);
      }
    });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await bookEvent(eventId, numberOfTickets, userId, ticketDetails);
      toast("Booking Successfully", { type: "success" });
      setIsModalOpen(false);
    } catch (error) {
      toast("Failed to book tickets", { type: "error" });
    }
  };

  return (
    <div className="max-w-full sm:max-w-md lg:max-w-3xl xl:max-w-4xl p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Book Tickets</h3>
      <form onSubmit={handleBooking} className="flex-col gap-10">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Tickets:
          </label>
          <input
            type="number"
            value={numberOfTickets}
            onChange={handleNumberOfTicketsChange}
            min="1"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-wrap gap-10">
          {ticketDetails.map((ticket, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Ticket {index + 1}</h4>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={ticket.name}
                onChange={(e) => handleTicketChange(index, e)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                Contact Number:
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={ticket.contactNumber}
                onChange={(e) => handleTicketChange(index, e)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                Seat Preference:
              </label>
              <select
                name="seatPreference"
                value={ticket.seatPreference}
                onChange={(e) => handleTicketChange(index, e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select an option</option>
                {seatOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="flex-col mt-8 gap-10">
          <div className="text-gray-700 text-sm font-bold mb-2">
            Total Amount: ${numberOfTickets * 10}
          </div>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};
