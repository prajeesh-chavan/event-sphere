import React from "react";
import CategoryCard from "../CategoryCard";

const CategorySection = () => {
  const categories = [
    { title: "Music" },
    { title: "Technology" },
    { title: "Art" },
    { title: "Sports" },
  ];

  return (
    <section className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-28">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
