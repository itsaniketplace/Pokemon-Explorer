import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function DetailPage() {
  const pokemonId = useParams().id;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => {
      console.log(res.data);
      setPokemon(res.data);
    });
  }, [pokemonId]);

  if (!pokemon)
    return <p className="text-center mt-25 font-semibold ">Loading...</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-blue-100 p-6 rounded-3xl">
      <Link to="/" className="">
        <button className="flex font-bold  border-none px-6 py-2 bg-orange-300 rounded-xl shadow-md hover:shadow-xl hover:scale-105">
          <span className="text-lg font-bold">←</span> Back
        </button>
      </Link>

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-yellow-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold capitalize mb-6 text-orange-600 tracking-wide">
          {pokemon.name}
        </h1>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40 mx-auto drop-shadow-md mb-4"
        />

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Type</h2>
          <div className="flex justify-center gap-2 flex-wrap">
            {pokemon.types.map((t, i) => (
              <span
                key={i}
                className="bg-orange-200 text-orange-800 font-semibold px-3 py-1 rounded-full shadow-sm text-sm"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Abilities
          </h2>
          <div className="flex justify-center gap-2 flex-wrap">
            {pokemon.abilities.map((a, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full text-sm"
              >
                {a.ability.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 text-left">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Stats</h2>
          <ul className="space-y-1">
            {pokemon.stats.map((s, i) => (
              <li
                key={i}
                className="flex justify-between bg-orange-100 p-2 rounded-lg text-sm font-medium"
              >
                <span className="capitalize">{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Moves</h2>
          <div className="max-h-40 overflow-y-auto bg-orange-50 rounded-lg p-3 text-sm space-y-1">
            {pokemon.moves.map((m, i) => (
              <div
                key={i}
                className="inline-block mr-2 bg-red-100 text-red-800 px-2 py-1 rounded-full"
              >
                {m.move.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
