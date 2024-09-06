import { Button } from "../Components/ui/button";
import React, { useState } from "react";

import BlurFade from "@/components/magicui/blur-fade";

import { Testimonials } from "@/Components/Testimonals";
import WordPullUp from "@/Components/magicui/word-pull-up";
import { FadeText } from "@/Components/magicui/fade-text";

import { Link } from "react-scroll";
import CategorySection from "@/Components/sections/Category";

import { useInView } from "react-intersection-observer";
import SearchBar from "@/Components/SearchBar";
import EventCard from "@/Components/EventCard";
import { events } from "@/data";
import Globe from "@/Components/magicui/globe";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger when 10% of the section is visible
  });

  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 py-16 sm:py-24 lg:py-30 flex items-center justify-center relative">
  <img
    src="/tick.svg"
    className="hidden md:block absolute top-5  w-4/5 sm:w-3/4  -z-50 animate-fadeInLeft"
  />
  <div className="mx-auto sm:ms-20 md:ms-[480px] w-1/2 text-center flex flex-col items-center">
    <h1>
      <WordPullUp
        words="Seamless Event Booking Starts Here"
        className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none drop-shadow-md text-black"
        highlightIndices={[1, 2]}
        highlightColors={["text-sky-500"]}
      />
    </h1>
    <p>
      <FadeText
        className="text-base sm:text-lg md:text-xl mb-8 font-normal text-slate-600 sm:px-8 md:px-12 lg:px-20 xl:px-24"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="EventSphere simplifies event booking, offering real-time availability, ticket management, and secure payments, all in one place."
      />
    </p>

    <Link to="search-event" spy={true} smooth={true} duration={500}>
      <Button variant="primary" className="shadow-md opacity-0 delay-500 animate-fadeInUp">
        Browse Events
      </Button>
    </Link>
  </div>
</section>



      {/* Search Bar */}

      <section
        id="search-event"
        className="relative h-50  gap-12  flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-28 font-bold text-center ">
          <BlurFade delay={0.25} inView>
            Engage Your Curiosity
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            Discover Events Near You!
          </BlurFade>
        </h1>

        <SearchBar />
        <img
          src="/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3_t5p8_-1-_mt5l_-2-_dhxr_-2-_nmxe.svg"
          className="w-4/5 md:w-2/6"
        />

        {/* <Globe className="top-[500px]"/> */}
      </section>

      {/* Featured Events */}
      <section className="py-56 m-12 sm:m-0 flex flex-col items-center gap-32">
        <h1 ref={ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <BlurFade delay={0.25} inView>
            Exclusive Events
          </BlurFade>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Categories */}
      {/* <section className="h-screen p-24">
      <h1 className="text-5xl uppercase text-center ">
          <BlurFade delay={0.25} inView>
            Category
          </BlurFade>
        </h1>
        <div className="h-24 w-64"></div>
      </section> */}
      <CategorySection />

      {/* Testimonials */}
      <section className="md:py-24">
        <Testimonials />
      </section>

      {/*  */}
    </>
  );
};

export default Home;
