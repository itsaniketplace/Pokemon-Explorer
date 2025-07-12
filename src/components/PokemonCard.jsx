import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ name, url }) {
  const id = url.split("/").filter(Boolean).pop();
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="p-4 bg-gradient-to-br from-yellow-100 via-orange-200 to-red-100 rounded-2xl text-center shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 border-2 border-yellow-300 hover:border-red-400 overflow-x-hidden">
        <img
          src={image}
          alt={name}
          className="mx-auto w-24 h-24 object-contain drop-shadow-md"
        />
        <p className="capitalize mt-3 text-lg font-bold text-gray-800 tracking-wide ">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default PokemonCard;
