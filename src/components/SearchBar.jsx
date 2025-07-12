import React from "react";

function Searchbar({ onSearch }) {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search Pokémon..."
      className="w-full p-3 rounded-xl border-2 border-yellow-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-white shadow-md focus:shadow-lg transition duration-300 text-gray-800 placeholder:text-gray-400 font-semibold "
    />
  );
}

export default Searchbar;
