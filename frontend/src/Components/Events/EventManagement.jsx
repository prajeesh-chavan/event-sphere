import { getEvents } from "../../services/eventService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { EventCardSkeleton } from "../skelatons";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Link
        to="/organizer/create-event"
        className="px-6 py-2 absolute right-12 bg-sky-500 text-white rounded-lg hover:bg-sky-600
        transition duration-200 mb-10"
      >
        Create New Event
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-gray-700">Upcoming Events</h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3)
            .fill()
            .map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 ? (
            <p className="text-gray-600">No events to display.</p>
          ) : (
            events.map((event, index) => (
              <>
                <div className="relative ">
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
                </div>
              </>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default EventManagement;
