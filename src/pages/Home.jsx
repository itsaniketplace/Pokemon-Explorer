import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemonList(res.data.results);
      setFilteredList(res.data.results);
    });
  }, []);

  const searchHandler = (text) => {
    const filtered = pokemonList.filter((p) => {
      return p.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredList(filtered);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-blue-100 p-6 font-sans rounded-3xl">
      <h1 className="text-center text-5xl sm:text-6xl font-black mb-10 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-text-shimmer drop-shadow-xl tracking-wide">
        Pokémon Explorer
      </h1>
      <div className="max-w-2xl mx-auto mb-10">
        <Searchbar onSearch={searchHandler} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredList.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
          //   <ul key={index}>
          //     <li> name={pokemon.name}</li>
          //     <li className="overflow-hidden">url={pokemon.url} </li>
          //   </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
