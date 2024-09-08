import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Input } from "./ui/input";
import { DatePicker } from "./DatePicker";
import { Combobox } from "./Dropdown";
import { IoSearch } from "react-icons/io5";
import { categoryOptions } from "@/data";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, date, category });
  };

  return (
    <div className="search-bar-container w-3/4 md:w-full max-w-4xl md:mx-auto shadow-md py-4 px-6 rounded-xl md:rounded-full border-2 border-sky-300 cursor-pointer">
      <form
        className="search-bar-form flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center"
        onSubmit={handleSearch}
      >
        <div className="relative w-full flex-grow">
          <CiLocationOn className="absolute left-3 top-2 text-gray-500" size={24} />
          <Input
            type="text"
            placeholder="Location"
            className="w-full pl-10 py-2 md:rounded-s-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-auto flex-grow">
          <DatePicker
            selectedDate={date}
            onDateChange={(newDate) => setDate(newDate)}
            className="w-full py-2"
          />
        </div>

        <div className="w-full sm:w-auto flex-grow">
          <Combobox
            options={categoryOptions}
            title="Category"
            selectedOption={category}
            onOptionSelect={(newCategory) => setCategory(newCategory)}
            className="w-full py-2"
          />
        </div>

        <button
          type="submit"
          className="w-auto flex gap-2 bg-sky-500 text-white text-center items-center py-3 px-3 rounded-full transform transition hover:scale-105 hover:bg-sky-500/80"
        >
          <IoSearch size={24} />
          <h1 className="text-lg  sm:hidden">Search</h1>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
