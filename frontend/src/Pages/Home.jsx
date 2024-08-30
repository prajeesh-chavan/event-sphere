import { Button } from "../Components/ui/button";
import React, { useState } from "react";
import ProductCard from "@/Components/ProductCard";
import BlurFade from "@/components/magicui/blur-fade";
import { IoSearch } from "react-icons/io5";
import { categoryOptions, events } from "@/data";
import { DatePicker } from "@/Components/DatePicker";
import { Input } from "@/Components/ui/input";
import { Combobox } from "@/Components/Dropdown";
import { Testimonials } from "@/Components/Testimonals";
import WordPullUp from "@/Components/magicui/word-pull-up";
import { FadeText } from "@/Components/magicui/fade-text";
import { MagicCard } from "@/Components/magicui/magic-card";
import ParticlesBg from "@/Components/Particles";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-scroll";
import CategorySection from "@/Components/sections/Category";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 py-56 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center">
          {/* <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none drop-shadow-md text-black md:text-5xl lg:text-6xl">
            Seamless <span className="text-sky-500">Event Booking</span> Starts
            Here.
          </h1> */}
          <h1>
            <WordPullUp
              words="Seamless Event Booking Starts Here"
              className="mb-4 text-4xl font-extrabold text-center tracking-tight leading-none drop-shadow-md text-black md:text-5xl lg:text-6xl"
              highlightIndices={[1, 2]} // Highlight words
              highlightColors={["text-sky-500"]} // Highlight colors
            />
          </h1>

          <p>
            <FadeText
              className="text-lg mb-8 font-normal text-center text-slate-600 lg:text-xl sm:px-16 xl:px-48"
              direction="left"
              framerProps={{
                show: { transition: { delay: 1 } },
              }}
              text="EventSphere simplifies event booking, offering real-time availability, ticket management, and secure payments, all in one place."
            />
          </p>

          <Link to="search-event" spy={true} smooth={true} duration={500}>
            <Button variant="primary" className="shadow-md">
              Browse Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Search Bar */}

      <section
        id="search-event"
        className="h-50 py-56 gap-12  flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl font-bold text-center ">
          <BlurFade delay={0.25} inView>
            Engage Your Curiosity
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            Discover Events Near You!
          </BlurFade>
        </h1>

        <div className="search-bar-container md:mb-32 md:w-[1000px] shadow-md py-4 px-6 rounded-full border-2 border-sky-300 cursor-pointer">
          <form className="search-bar-form flex flex-col  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center mx-auto">
            <div className="relative w-1/2">
              <CiLocationOn className="absolute left-2 top-2" size={24} />
              <Input
                type="text"
                placeholder="Location"
                className="rounded-s-full ps-10"
              />
            </div>
            <DatePicker />
            <Combobox options={categoryOptions} title="Category" />
            <button
              type="submit"
              className="search-btn bg-sky-500 text-white text-center p-3 rounded-full w-full sm:w-auto transform transition hover:scale-105 hover:bg-sky-500/80"
            >
              <IoSearch size={32} />
            </button>
          </form>
        </div>

        {/* <div className="flex h-64">
          <ProductCard />
        </div> */}
      </section>

      {/* Featured Events */}
      <section className="py-24 flex flex-col items-center gap-32">
        <h1 className="text-5xl font-bold text-center">
          <BlurFade delay={0.25} inView>
            Exclusive Events
          </BlurFade>
        </h1>
        {/* <div>
            <ProductCard/>
            
          </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <ProductCard
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
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
