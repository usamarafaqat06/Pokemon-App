// PokemonDetail.js
import React from "react";

function PokemonDetail({ pokemonDetail }) {
 

  return (
    <>
      <div className="relative container mx-auto py-10">
        <div className="border  px-2 lg:p-[50px] rounded-lg bg-white shadow-xl   w-[310px] mx-auto md:w-[500px]">
          <div className="flex flex-col items-center gap-x-[30px]">
            <div className="py-[20px]">
              <span className="block text-center text-[30px] text-[#333] font-sans font-bold">
                {pokemonDetail.name}
              </span>
            </div>
            <div
              className="relative w-[150px] h-[150px] 
                    p-[35px] bg-white shadow-xl
                    rounded-full"
            >
              <img
                className="w-full h-full"
                src={pokemonDetail.sprites?.front_default}
                alt="Name"
              />
            </div>
          </div>
          <div className="py-[20px] border-b">
            <h3 className="block pb-[15px] text-center text-[18px] text-[#333] font-sans font-bold">
              Types
            </h3>
            <ul className="flex justify-center flex-wrap  gap-[10px] ">
              {pokemonDetail.types.map((type, index) => (
                <li
                  key={index}
                  className="px-[18px] py-[8px] font-bold text-white bg-[#111827] rounded-full"
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-[20px] border-b">
            <h3 className="block text-center pb-[15px] text-[18px] text-[#333] font-sans font-bold">
              Abilities
            </h3>
            <ul className="flex justify-center flex-wrap   gap-[10px]">
              {pokemonDetail.abilities.map((ability, index) => (
                <li
                  key={index}
                  className="px-[18px] py-[8px] font-bold text-white bg-[#111827] rounded-full"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-[20px] border-b flex justify-between">
            <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
              Base Experience
            </h3>
            <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
              {pokemonDetail.base_experience}
            </p>
          </div>
          <div className="py-[20px] border-b flex justify-between">
            <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
              Order
            </h3>
            <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
              {pokemonDetail.order}
            </p>
          </div>
          <div className="py-[20px] border-b flex justify-between">
            <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
              Height
            </h3>
            <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
              {pokemonDetail.height}cm
            </p>
          </div>
          <div className="py-[20px] flex justify-between">
            <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
              Weight
            </h3>
            <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
              {pokemonDetail.weight} lbs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetail;
