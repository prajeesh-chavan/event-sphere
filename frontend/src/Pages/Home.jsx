import { Button } from "../Components/ui/button";
import React, { useState } from "react";
// import './down-arrow'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import ProductCard from "@/Components/ProductCard";

const HeroSection = () => {
  const [date, setDate] = useState([]);
  const [showCalendar, setShowCalender] = useState(false);

  const handleDate=()=>{
    setShowCalender(!showCalendar);
    }

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Seamless <span className="text-sky-500">Event Booking</span> Starts
            Here.
          </h1>
          <p className="text-lg mb-8 font-normal text-slate-600 lg:text-xl sm:px-16 xl:px-48">
            EventSphere simplifies event booking, offering real-time
            availability, ticket management, and secure payments, all in one
            place.
          </p>
          {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Browse Events
          </a>
        </div> */}

          <Button variant="primary">Browse Events</Button>

          {/* <div className="bg-sky-500 size-24 rounded-full shadow-md flex justify-center items-center hover:translate-y-0.5 hover:shadow-lg">
            <svg className="size-12" fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
       </div> */}
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-indigo-dark h-50 p-32 gap-12 h-screen flex flex-col items-center justify-start">
        <h1 className="text-5xl uppercase text-center">
          Engage Your Curiosity:
          <br />
          Discover Events Near You!
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Select className=""> 
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder="Select Event Category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="concert">Concert</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        
        <div className="relative">
          <a onClick={handleDate}><Button variant="primary" size="lg">Choose Date</Button></a>

          {showCalendar && <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="absolute z-20 top-12 rounded-md border-2 shadow-lg bg-white border-slate-300 shadow-gray-400"
          />}
          </div>
        </div>
          <div className="flex items-center">
             {/* <div className="w-72 h-80 rounded-lg border-2 border-slate-400 hover">

             </div> */}
             <div className="flex gap-4">
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             </div>

          </div>
        <div className="container"></div>
      </section>

      {/* Featured Events */}
      <section className="h-screen p-24">
              <h1 className="text-3xl">Featured Events</h1>
      </section>

      {/* Categories */}
      <section className="h-screen p-24">
              <h1 className="text-3xl">Categories</h1>
      </section>

      {/* Testimonials */}
      <section className="h-screen p-24">
              <h1 className="text-3xl">Testimonials</h1>

      </section>

      {/*  */}
    </>
  );
};

export default HeroSection;
