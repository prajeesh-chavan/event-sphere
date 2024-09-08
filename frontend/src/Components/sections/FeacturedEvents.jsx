import { useInView } from "framer-motion";
import EventCard from "../EventCard";
import BlurFade from "../magicui/blur-fade";
import { events } from "@/data";
import { useRef } from "react";

export const FeaturedEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger when 10% of the section is visible
  });

  return (
    <section className="flex flex-col items-center gap-10 justify-center h-screen">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        <BlurFade delay={0.25} inView>
          Exclusive Events
        </BlurFade>
      </h1>

      <div className="grid grid-cols-1 w-2/3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 3).map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
            className={`transition-opacity duration-1000 transform ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-96"
            } delay-${(index % 3) * 200}`}
          />
        ))}
      </div>
    </section>
  );
};
