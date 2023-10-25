import React, { useState } from "react";
import Loader from "../component/Loader";
import { useFetchPokemonByName } from "../hooks/useFetchPokemonByName";
import PokemonDetail from "../component/PokemonDetail";
import debounce from "lodash/debounce";

function ComparePokemonPage() {
  const [debouncedName1, setDebouncedName1] = useState("");
  const [debouncedName2, setDebouncedName2] = useState("");
  console.log(debouncedName1);

  const { data: pokemonData1, isLoading: isLoadingData1 } =
    useFetchPokemonByName(debouncedName1);

  const { data: pokemonData2, isLoading: isLoadingData2 } =
    useFetchPokemonByName(debouncedName2);

  const debouncedSearch1 = debounce((e) => {
    setDebouncedName1(e.target.value);
  }, 3000);

  const debouncedSearch2 = debounce((e) => {
    setDebouncedName2(e.target.value);
  }, 3000);

  return (
    <div>
      <h1 className="text-center font-bold mt-[60px]">Compare Pokémon</h1>
      <div className=" container px-[10px] mx-auto  mt-[30px] flex flex-col justify-center lg:flex-row justify-between">
        <div className="  md:w-[50%] mx-auto   flex items-center flex-col   ">
          <input
            className="w-[200px] h-10 px-4    mb-[10px] md:ms-0 lg:mb-0 text-gray-800 border-2 border-gray-300 rounded-md self-start lg:self-center   focus:outline-none"
            type="text"
            placeholder="Search Name"
            onChange={debouncedSearch1}
          />
          {debouncedName2 !== "" && isLoadingData1 ? (
            <Loader />
          ) : pokemonData1?.base_experience ? (
            debouncedName1 !== "" ? (
              <PokemonDetail pokemonDetail={pokemonData1} />
            ) : null
          ) : debouncedName1 !== "" && pokemonData1?.base_experience !== "" ? (
            <span className="block font-bold my-5">Pokemon not found</span>
          ) : null}
        </div>

        <div className="  md:w-[50%]  mx-auto flex items-center  flex-col">
          <input
            className="w-[200px] h-10 px-4 py-2  md:ms-0   text-gray-800 border-2 border-gray-300  rounded-md self-start lg:self-center  focus:outline-none "
            type="text"
            placeholder="Search Name"
            onChange={debouncedSearch2}
          />

          {debouncedName2 !== "" && isLoadingData2 ? (
            <Loader />
          ) : pokemonData2?.base_experience ? (
            debouncedName2 !== "" ? (
              <PokemonDetail pokemonDetail={pokemonData2} />
            ) : null
          ) : debouncedName2 !== "" && pokemonData2?.base_experience !== "" ? (
            <span className="block font-bold my-5">Pokemon not found</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ComparePokemonPage;
