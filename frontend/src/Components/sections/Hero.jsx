import { useEffect, useRef } from "react";
import WordPullUp from "../magicui/word-pull-up";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import heroImage from "../../../public/event-animation";
import BlurFade from "../magicui/blur-fade";

export const Hero = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current?.play();
    const timer = setTimeout(() => {
      // Start the animation after 3 seconds (or any other logic)
      lottieRef.current?.pause();
    }, 2000); // Adjust the delay time (3000ms = 3 seconds)

    // Optional: Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="flex flex-col items-center justify-center sm:p-40 md:pt-52 bg-gradient-to-b from-sky-100/60 to-transparent">
      <div className="flex items-center justify-center flex-col md:flex-row w-[320px] sm:w-auto">
        <div className="flex flex-col justify-center item-center md:items-start w-11/12 md:w-full lg:w-1/2 gap-6 text-center md:text-start">
          <WordPullUp
            words="Seamless Event Booking Starts Here"
            className="mb-4 text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none drop-shadow-md text-black"
            highlightIndices={[1, 2]}
            highlightColors={["text-sky-500"]}
          />
          <BlurFade delay={0.5} inView>
            <p className="text-xs md:text-lg w-6/7 md:w-2/3">
              EventSphere simplifies event booking, offering real-time
              availability, ticket management, and secure payments, all in one
              place.
            </p>
          </BlurFade>
          <BlurFade delay={1} inView>
            <div className="mt-4 flex justify-center flex-row gap-4 ">
              <Link to="create-event">
                <Button variant="outline"> Create Event</Button>
              </Link>
              <Link to="search-event" spy={true} smooth={true} duration={500}>
                <Button variant="primary">Browse Events</Button>
              </Link>
            </div>
          </BlurFade>
        </div>
        {/* <img src="/target-audience-51.svg" className="w-2/3 md:w-1/2" /> */}
        <Lottie
          animationData={heroImage}
          className="w-2/3 md:w-1/2 md:-me-28"
          autoplay={false} // Disable autoplay
          lottieRef={lottieRef} // Assign the ref to Lottie
        />
      </div>
    </section>
  );
};
