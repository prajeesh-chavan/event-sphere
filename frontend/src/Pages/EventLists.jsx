import SearchBar from "@/Components/SearchBar";
import { events } from "@/data";
import React, { useState } from "react";

import EventCard from "@/Components/EventCard";

function EventLists() {
  const [filteredEvents, setFilteredEvents] = useState(events);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              className="transition-opacity duration-1000 transform "
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventLists;
