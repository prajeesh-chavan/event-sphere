import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";

const EventCard = ({
  image = "/image.png",
  title,
  date,
  location,
  description,
}) => {
  return (
    <div className=" bg-white w-64 h-[400px] md:w-96 shadow-lg rounded-lg transform transition hover:scale-[1.02] duration-200 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <div className="text-gray-600 text-sm  flex items-center space-x-2 mt-2">
          <span className="flex items-center">
            <CiCalendarDate className="w-4 h-4 mr-1" />
            {date.split("T")[0]}
          </span>
          <span className="flex items-center">
            <CiLocationOn className="w-4 h-4 mr-1" />
            {location}
          </span>
        </div>
        <p className="text-gray-700 mt-2">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
    </div>

    // </BlurFade>
  );
};

export default EventCard;
