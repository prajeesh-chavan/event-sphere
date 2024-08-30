import React from "react";

const CustomSelect = ({ options, icon }) => {
  return (
    <div className="relative inline-block w-full">
      <div className="flex items-center">
        <span className="absolute left-3">{icon}</span>
        <select
          className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 "
          style={{ outline: "none" }}
        >
          <option value="">Select Category</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
