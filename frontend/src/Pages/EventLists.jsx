import SearchBar from "@/Components/SearchBar";
// import { events } from "@/data";
import React, { useEffect, useState } from "react";

import EventCard from "@/Components/EventCard";
import { fetchEvents } from "@/api";

function EventLists() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
        setFilteredEvents(data); // Update filteredEvents when events are fetched
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getEvents();
  }, []);

  const searchEvents = ({ location, date, category }) => {
    const filtered = events.filter(
      (event) =>
        (location ? event.location.includes(location) : true) &&
        (date ? event.date === date : true) &&
        (category ? event.category.includes(category) : true)
    );
    setFilteredEvents(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-24 p-12 gap-12">
        <SearchBar onSearch={searchEvents} />

        {Array.isArray(filteredEvents) && filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              image={`http://localhost:5000${event.imageUrl}`}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              className="transition-opacity duration-1000 transform "
            />
            ))}
          </div>
        ) : (
          <p className="text-destructive">No events found</p>
        )}
      </div>
    </>
  );
}

export default EventLists;
