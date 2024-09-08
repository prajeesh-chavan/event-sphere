import WordPullUp from "../magicui/word-pull-up";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-40 h-screen bg-gradient-to-b from-sky-100/60 to-transparent">
      <div className="flex justify-center items-center flex-col lg:flex-row z-10">
        <div className="flex flex-col justify-center item-center lg:items-start w-5/6 md:w-1/2 gap-6 text-center md:text-start">
          <WordPullUp
            words="Seamless Event Booking Starts Here"
            className="mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none drop-shadow-md text-black"
            highlightIndices={[1, 2]}
            highlightColors={["text-sky-500"]}
          />
          <p className="text-lg w-5/6 md:w-2/3">
            EventSphere simplifies event booking, offering real-time
            availability, ticket management, and secure payments, all in one
            place.
          </p>
          <div className="mt-4 flex gap-4">
            <NavLink to="/create-event">
              <Button variant="outline"> Create Event</Button>
            </NavLink>
            <Link to="search-event" spy={true} smooth={true} duration={500}>
              <Button variant="primary">Browse Events</Button>
            </Link>
          </div>
        </div>
        <img src="/target-audience-51.svg" className="w-2/3 md:w-1/2" />
      </div>
    </section>
  );
};
