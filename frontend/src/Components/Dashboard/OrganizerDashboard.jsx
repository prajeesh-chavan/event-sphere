import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import EventCard from "../EventCard";
import { getEvents } from "../../services/eventService";
import { Link } from "react-router-dom";
import { EventCardSkeleton } from "../skelatons";

function Dashboard() {
  const CircularProgressBar = ({ progress }) => {
    const circleStyle = {
      background: `conic-gradient(#0ea5e8 ${progress * 3.6}deg, #e0e0e0 0deg)`,
    };

    return (
      <div className="relative w-20 h-20 flex justify-center items-center bg-gray-200 rounded-full shadow-md">
        <div
          className="absolute w-full h-full rounded-full"
          style={circleStyle}
        ></div>
        <div className="relative w-10 h-10 bg-white  rounded-full flex justify-center items-center"></div>
      </div>
    );
  };

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  const organizerId = localStorage.getItem("userId");
  console.log(organizerId);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      const filteredEvents = data.filter(
        (event) => event.eventOrganizerId === organizerId
      );
      setEvents(filteredEvents);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div className="flex-col">
            <h2 className="text-xl font-semibold mb-4">Events Hosted</h2>
            <h1 className="text-3xl font-semibold">75</h1>
          </div>
          <CircularProgressBar progress={75} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div className="flex-col">
            <h2 className="text-xl font-semibold mb-4">Tickets Sold</h2>
            <h1 className="text-3xl font-semibold">75</h1>
          </div>
          <CircularProgressBar progress={75} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div className="flex-col">
            <h2 className="text-xl font-semibold mb-4">Ratings</h2>
            <h1 className="text-3xl font-semibold">75</h1>
          </div>
          <CircularProgressBar progress={75} />
        </div>
      </div>
      <h1 className="text-3xl font-semibold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(3)
            .fill()
            .map((_, index) => <EventCardSkeleton key={index} />)
        ) : events.length === 0 ? (
          <p className="text-gray-600">No events to display.</p>
        ) : (
          events.slice(0, 3).map((event, index) => (
            <>
              <Link to={`/organizer/event-details/${event._id}`}>
                <EventCard
                  key={index}
                  image={`http://localhost:5000${event.image}`}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                />
              </Link>
            </>
          ))
        )}
      </div>
    </>
  );
}

export default Dashboard;
