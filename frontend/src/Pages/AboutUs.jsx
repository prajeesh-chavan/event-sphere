import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-sky-100/80 via-white to-sky-100/80">
      <div className="w-full py-10 px-6 mt-24 h-full  rounded-lg ">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-sky-500">About Me</h1>
        </header>

        {/* Profile and Description Section */}
        <section className="flex flex-col md:flex-row items-center mb-10">
          {/* Profile Section (Left) */}
          <div className="text-center md:w-1/2 mt-6 flex justify-center">
            <div>
              <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-6 shadow-lg hover:scale-105 transition duration-300">
                <img
                  src="/prajeeshchavan.jpg"
                  alt="Prajeesh Chavan"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Prajeesh Chavan
              </h3>
              <p className="text-sm text-gray-500">
                Web Developer | MERN Stack
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://linkedin.com/in/prajeeshchavan"
                  className="text-sky-600 hover:text-sky-400 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:prajeeshchavan@gmail.com"
                  className="text-red-500 hover:text-red-400 transition duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://wa.me/7012020059"
                  className="text-green-500 hover:text-green-400 transition duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://github.com/prajeesh-chavan"
                  className="text-gray-900 hover:text-gray-600 transition duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Description Section (Right) */}
          <div className="md:w-2/5 text-left">
            <p className="mt-6 p-5 text-lg text-gray-700 bg-white shadow-md rounded-lg">
              I am a passionate web developer specializing in the MERN stack. I
              focus on creating seamless, user-friendly platforms like
              EventSphere, designed to simplify event bookings and enhance user
              experiences. My expertise in ReactJS, Node.js, and MongoDB, paired
              with a strong dedication to delivering high-quality solutions,
              drives the development of impactful digital platforms. I believe
              in constant innovation and am always seeking to improve my skills.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <a
                href="mailto:your-email@example.com"
                className="bg-sky-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-600 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
