import React, { useState } from "react";
import Loader from "../component/Loader";
import { useFetchPokemonByName } from "../hooks/useFetchPokemonByName";
import PokemonDetail from "../component/PokemonDetail";

function ComparePokemonPage() {
  const [pokemonName1, setPokemonName1] = useState("");
  const [pokemonName2, setPokemonName2] = useState("");

  const { data: pokemonData1, isLoading: isLoadingData1 } =
    useFetchPokemonByName(pokemonName1);

  const { data: pokemonData2, isLoading: isLoadingData2 } =
    useFetchPokemonByName(pokemonName2);

  return (
    <div>
      <h1 className="text-center font-bold mt-[60px]">Compare Pokémon</h1>
      <div className=" container px-[10px] mx-auto  mt-[60px] flex flex-col justify-center lg:flex-row justify-between">
        <div className="  md:w-[50%] mx-auto   flex items-center flex-col   ">
          <input
            className="w-[200px] h-10 px-4  ms-[45px]  mb-[10px] md:ms-0 lg:mb-0 text-gray-800 border-2 border-gray-300 rounded-md self-start lg:self-center   focus:outline-none"
            type="text"
            placeholder="Search Name"
            value={pokemonName1}
            onChange={(e) => setPokemonName1(e.target.value.toLowerCase())}
          />
          {pokemonName2 !== "" && isLoadingData1 ? (
            <Loader />
          ) : pokemonData1?.base_experience ? (
            pokemonName1 !== "" ? (
              <PokemonDetail pokemonDetail={pokemonData1} />
            ) : null
          ) : pokemonName1 !== "" && pokemonData1?.base_experience !== "" ? (
            <span className="block font-bold my-5">Pokemon not found</span>
          ) : null}
        </div>

        <div className="  md:w-[50%] w-[50%] mx-auto flex items-center  flex-col">
          <input
            className="w-[200px] h-10 px-4 py-2 ms-[45px] md:ms-0   text-gray-800 border-2 border-gray-300 self-start rounded-md self-start lg:self-center  focus:outline-none "
            type="text"
            placeholder="Search Name"
            value={pokemonName2}
            onChange={(e) => setPokemonName2(e.target.value.toLowerCase())}
          />

          {pokemonName2 !== "" && isLoadingData2 ? (
            <Loader />
          ) : pokemonData2?.base_experience ? (
            pokemonName2 !== "" ? (
              <PokemonDetail pokemonDetail={pokemonData2} />
            ) : null
          ) : pokemonName2 !== "" && pokemonData2?.base_experience !== "" ? (
            <span className="block font-bold my-5">Pokemon not found</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ComparePokemonPage;
