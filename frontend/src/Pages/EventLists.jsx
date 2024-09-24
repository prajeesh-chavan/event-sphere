import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../Components/SearchBar";
import EventCard from "../Components/EventCard";
import { getEvents } from "../services/eventService";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce"; // Import lodash debounce
import Skeleton from "../Components/Skeleton"; // Assuming you have a Skeleton component
import { EventCardSkeleton } from "@/Components/skelatons";

function EventLists() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
        setFilteredEvents(data); // Initialize filteredEvents with all events
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(
          err.response?.status === 404
            ? "No events found."
            : "Failed to fetch events. Please check your connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const searchEvents = useCallback(
    debounce(({ location, date, category }) => {
      const filtered = events.filter(
        (event) =>
          (location ? event.location.includes(location) : true) &&
          (date ? event.date === date : true) &&
          (category ? event.category.includes(category) : true)
      );
      setFilteredEvents(filtered);
    }, 300), // 300ms debounce delay
    [events]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-28 p-12 gap-12 bg-gradient-to-l from-sky-100/80 via-white to-sky-100/80">
      <SearchBar onSearch={searchEvents} />

      {loading ? (
        // Show skeleton loader while fetching events
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3)
            .fill()
            .map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
        </div>
      ) : error ? (
        <p className="text-destructive">{error}</p>
      ) : filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredEvents.map((event) => (
            <Link to={`/event/${event._id}`} key={event._id}>
              <EventCard
                image={`${import.meta.env.VITE_API_URL}${event.image}`}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                className="transition-opacity duration-1000 transform"
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-destructive">
          No events found matching the search criteria.
        </p>
      )}
    </div>
  );
}

export default EventLists;
