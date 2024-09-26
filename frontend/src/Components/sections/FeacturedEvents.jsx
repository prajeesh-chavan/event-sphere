import { useInView } from "framer-motion";
import EventCard from "../EventCard";
import BlurFade from "../magicui/blur-fade";
import { useEffect, useRef, useState } from "react";
import { getEvents } from "../../services/eventService";
import { Link } from "react-router-dom";
import { EventCardSkeleton } from "../Skelatons";

export const FeaturedEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger when 10% of the section is visible
  });

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      const events = await getEvents();
      setEvents(events);
      setLoading(false);
    };

    fetchEventsData();
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 py-24 justify-between minh-screen">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        <BlurFade delay={0.25} inView>
          Exclusive Events
        </BlurFade>
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  image={`${import.meta.env.VITE_API_URL}${event.image}`}
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
    </section>
  );
};
