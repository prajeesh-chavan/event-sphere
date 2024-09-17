import React from "react";
import { useInView } from "react-intersection-observer";
import { Hero } from "../Components/sections/Hero";
import { BrowseEvents } from "../Components/sections/BrowseEvents";
import { FeaturedEvents } from "../Components/sections/FeacturedEvents";

import {
  FaUserPlus,
  FaSearch,
  FaTicketAlt,
  FaSmile,
  FaStar,
  FaLock,
} from "react-icons/fa";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger when 10% of the section is visible
  });

  return (
    <>
      <div className="bg-gradient-to-l from-sky-100/80 via-white to-sky-100/80">
        <Hero />
        <BrowseEvents />
        <FeaturedEvents />
        {/* <Testimonials /> */}
        <section className="py-12" ref={ref}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              How It Works
            </h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
                inView ? "animate-fadeIn" : ""
              }`}
            >
              <div className="text-center hover:scale-105 transform transition-transform">
                <FaUserPlus className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Step 1</h3>
                <p className="text-gray-600">
                  Sign up and create your profile.
                </p>
              </div>
              <div className="text-center hover:scale-105 transform transition-transform">
                <FaSearch className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Step 2</h3>
                <p className="text-gray-600">
                  Browse and find events that interest you.
                </p>
              </div>
              <div className="text-center hover:scale-105 transform transition-transform">
                <FaTicketAlt className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Step 3</h3>
                <p className="text-gray-600">
                  Register for events and get your tickets.
                </p>
              </div>
              <div className="text-center hover:scale-105 transform transition-transform">
                <FaSmile className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Step 4</h3>
                <p className="text-gray-600">Attend events and enjoy!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Benefits & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaTicketAlt className="mx-auto mb-4 text-4xl text-blue-500" />

                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600">
                  Quickly find and book events with just a few clicks.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaLock className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Your transactions are safe with our secure payment gateway.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaStar className="mx-auto mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600">
                  Get event suggestions tailored to your interests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
