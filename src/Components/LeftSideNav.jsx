import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">All Categories</h1>
      <h1 className="text-2xl bg-gray-300 p-4 text-center">National News</h1>
      {categories.map((categories) => (
        <Link
          className=" block ml-4 text-center  text-xl font-semibold"
          to={`/categories/${categories.id}`}
          key={categories.id}
        >
          {categories.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
