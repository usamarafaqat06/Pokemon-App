import React, { useState, useEffect } from "react";
import Loader from "../component/Loader";

import {
  useGetPokemonDataQuery,
  useFilterPokemonByGenerationQuery,
  useFilterPokemonByGenerationNameQuery,
} from "../redux/apiCalls/apiSlice";
import PokemonCard from "../component/PokemonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PokemonPage() {
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [generation, setGeneration] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: generationData } = useFilterPokemonByGenerationQuery();

  const { data: generationNameData } = useFilterPokemonByGenerationNameQuery(
    generation,
    {
      skip: !generation,
    }
  );

  const { data: pokemon, isError } = useGetPokemonDataQuery(page, {
    skip: generation,
  });

  useEffect(() => {
    getspecificPokemon();
  }, [pokemon, page]);

  useEffect(() => {
    getspecificPokemonGeneration();
  }, [generation, generationNameData]);

  const getspecificPokemonGeneration = async () => {
    try {
      setLoading(true);
      const newData = [];

      if (generationNameData && generationNameData.pokemon_species) {
        for (const result of generationNameData.pokemon_species) {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${result.name}`
          );

          if (res.ok) {
            const data = await res.json();
            newData.push(data);
          } else {
            setPokemonData(newData);
            setLoading(false);
            return;
          }
        }
        setPokemonData(newData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getspecificPokemon = async () => {
    try {
      setLoading(true);
      const newData = [];
      if (pokemon && pokemon.results) {
        for (const result of pokemon.results) {
          const res = await fetch(result.url);
          const data = await res.json();

          newData.push(data);
        }

        setPokemonData(newData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPokemons = pokemonData.filter((item) =>
    item.name.trim().toLowerCase().includes(filterText.trim().toLowerCase())
  );
  const previousPageHandler = () => {
    setPage(page - 1);
  };
  const nextPageHandler = () => {
    setPage(page + 1);
  };

  return (
    <>
      {isError && <span>Error fetching data</span>}

      <div className="container mx-auto flex justify-between items-start py-5 px-2  xl:px-0   pt-[50px]  ">
        <input
          onChange={(e) => setFilterText(e.target.value)}
          className="w-[130px] md:w-[160px] h-10 px-4 text-[13px] md:text-[14px]  py-2 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none"
          type="text"
          placeholder="Search Name"
        />
        <div>
          <select
            value={generation}
            onChange={(e) => {
              setGeneration(e.target.value);
            }}
            className="w-[150px] md:w-[200px] h-10 px-4  text-[13px] md:text-[14px] text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none bg-gray-200 relative rounded-md focus:outline-none appearance-none"
          >
            <option
              value=""
              className="text-gray-800 bg-gray-200 font-bold z-10"
            >
              Filter By Generation
            </option>
            {generationData &&
              generationData.results &&
              generationData.results.map((item) => (
                <option
                  key={item.id}
                  value={item.name}
                  className="text-gray-800 bg-[#111827] p-[10px]  z-10"
                  style={{ backgroundColor: "white" }}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && pokemonData && (
        <div className="relative container mx-auto py-[50px] flex items-center justify-center">
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {filteredPokemons.length > 0 ? (
              filteredPokemons.map((item) => (
                <div key={item.id}>
                  <PokemonCard pokemonData={item} />
                </div>
              ))
            ) : (
              <div className="text-red-500">No Pokémon found by this name.</div>
            )}
          </div>

          <div
            className={`${
              page === 1 || filteredPokemons.length === 0 ? "hidden" : "block"
            }`}
          >
            <button
              onClick={previousPageHandler}
              className="w-12 h-12 bg-white flex items-center font-bold justify-center shadow-lg rounded-full absolute  lg:left-[-30px] xl:left-[-10px] left-[10px] top-[40vh] transition duration-500 hover:bg-[gray]"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>

          <div
            className={`${
              (pokemon &&
                filteredPokemons.length > 0 &&
                pokemon.results.index === pokemon &&
                pokemon.results.length - 1) ||
              filteredPokemons.length === 0
                ? "hidden"
                : "block"
            }`}
          >
            {pokemonData && (
              <button
                onClick={nextPageHandler}
                className="w-12 h-12 bg-white flex items-center justify-center font-bold shadow-lg rounded-full absolute right-[10px]  lg:right-[-30px] xl:right-[-10px] top-[40vh] transition duration-500 hover:bg-[gray]"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonPage;
