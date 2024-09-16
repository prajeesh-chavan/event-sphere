const Ticket = ({ tickets, onClick }) => {
  const getCategoryIcon = (category) => {
    if (category === "Event 1") {
      return "🎫";
    } else if (category === "Event 2") {
      return "🎫";
    } else if (category === "Event 3") {
      return "🎫";
    } else {
      return "🎫"; // Default ticket icon
    }
  };
  return (
    <ul className="space-y-4">
      {tickets.length === 0 ? (
        <li className="text-gray-600">No tickets found.</li>
      ) : (
        tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="border-b pb-4 hover:scale-[1.01] transform transition-transform flex flex-col md:flex-row justify-between items-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
            onClick={() => handleTicketClick(ticket)}
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <div className="text-gray-600 font-semibold text-lg flex items-center">
                <span className="mr-2">
                  {getCategoryIcon(ticket.eventTitle)}
                </span>
                {ticket.eventTitle}
              </div>
              <div className="text-sm text-gray-400">
                Booked on {new Date(ticket.bookedAt).toLocaleDateString()}
              </div>
            </div>
            <div className="text-gray-500 mt-2 md:mt-0">
              Seat: {ticket.seatNumber}
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default Ticket;
