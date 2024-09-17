import React, { useState } from "react";
import { bookEvent } from "../../services/bookingService";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";

export const BookingForm = ({ eventId, setIsModalOpen }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [ticketDetails, setTicketDetails] = useState([
    {
      name: "",
      contactNumber: "",
      seatPreference: "",
      email: "",
    },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const userId = localStorage.getItem("userId");

  const seatOptions = ["Front Row", "Middle Row", "Back Row", "General"];
  const ticketPrice = 10; // Example ticket price

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
            email: "",
          }),
        ];
      } else {
        return prevDetails.slice(0, newNumberOfTickets);
      }
    });

    setShowDetails(Array(newNumberOfTickets).fill(false));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await bookEvent(
        eventId,
        numberOfTickets,
        userId,
        ticketDetails,
        paymentMethod
      );
      toast("Booking Successfully", { type: "success" });
      setIsModalOpen(false);
    } catch (error) {
      toast("Failed to book tickets", { type: "error" });
    }
  };

  const [showDetails, setShowDetails] = useState([true]);

  const toggleDetails = (index) => {
    setShowDetails((prevShowDetails) => {
      const newShowDetails = Array(prevShowDetails.length).fill(false);
      newShowDetails[index] = !prevShowDetails[index];
      return newShowDetails;
    });
  };

  return (
    <div className="max-w-full sm:max-w-md lg:max-w-3xl w-80 md:w-96 xl:max-w-4xl p-6 bg-white rounded-lg shadow-md">
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
        <div className="flex flex-col">
          {ticketDetails.map((ticket, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold mb-2">
                Ticket {index + 1}
                <button
                  type="button"
                  onClick={() => toggleDetails(index)}
                  className="ml-2 text-blue-500"
                >
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      showDetails[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h4>
              {showDetails[index] && (
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <div>
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
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
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
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={ticket.email}
                      onChange={(e) => handleTicketChange(index, e)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payment Method:
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add other payment options if needed */}
          </select>
        </div>
        <div className="flex-col mt-8 gap-10">
          <div className="text-gray-700 text-sm font-bold mb-2">
            Total Amount: ₹{numberOfTickets * ticketPrice}
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
