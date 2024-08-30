import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

const EventCard = ({ image, title, date, location, description }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg transform transition hover:scale-105 duration-200 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <div className="text-gray-600 text-sm flex items-center space-x-2 mt-2">
        <span className="flex items-center">
          <CiCalendarDate className="w-4 h-4 mr-1"/>
          {date}
        </span>
        <span className="flex items-center">
          <CiLocationOn className="w-4 h-4 mr-1" />
          {location}
        </span>
      </div>
      <p className="text-gray-700 mt-2">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default EventCard;
