import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          Connecting People Through Unforgettable Events
        </p>
      </header>

      <section className="mb-10 flex items-center justify-center">
        <div className="gap-8">
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto mb-4 drop-shadow-md">
              <img
                src="/prajeeshchavan.jpg"
                alt="Prajeesh Chavan"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Prajeesh Chavan</h3>
            <p className="text-sm text-gray-600">Web Developer</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="#" className="text-blue-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-red-500">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
