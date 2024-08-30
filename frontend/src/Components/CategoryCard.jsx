import React from 'react';
import { FaMusic, FaLaptopCode, FaPaintBrush, FaBasketballBall } from 'react-icons/fa'; // Import icons from React Icons

const iconMap = {
  Music: <FaMusic size={40} className="text-blue-500" />,
  Technology: <FaLaptopCode size={40} className="text-green-500" />,
  Art: <FaPaintBrush size={40} className="text-red-500" />,
  Sports: <FaBasketballBall size={40} className="text-orange-500" />,
};

const CategoryCard = ({ title }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center hover:scale-90 cursor-pointer duration-300 ease-in-out">
      <div className="mb-4">
        {iconMap[title] || <FaMusic size={40} className="text-gray-500" />} {/* Default icon */}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
