import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";

function PokemonCard({ pokemonData }) {
  const [favorites, toggleFavorite] = useFavorites("favorites");
  const navigate = useNavigate();
  const isFavorite = favorites.some(
    (favorite) => favorite.id === pokemonData.id
  );

  return (
    <>
      <Tilt>
        <div className="border relative   rounded-lg bg-white shadow-xl w-[250px]  lg:w-[360px]">
          <div className="px-2 py-4">
            <div className="flex justify-center text-[22px] text-[#333] font-sans font-bold capitalize gap-x-[20px]">
              <h2 className="block "> {pokemonData.name}</h2>
              <button
                onClick={() => toggleFavorite(pokemonData)}
                className={` font-bold py-2 absolute right-[20px] top-[20px]  ${
                  isFavorite ? "text-[red]" : " text-[gray]"
                } text-[25px] block rounded-md  transition-colors duration-300`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div
              className="my-[30px] relative mx-auto w-[150px] h-[150px] 
                p-[35px] bg-white shadow-xl
                rounded-full"
            >
              <img
                className="w-full h-full"
                src={pokemonData.sprites?.front_default}
                alt={pokemonData?.name}
              />
            </div>
            <div className="py-[20px] border-b flex justify-between">
              <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                Weight
              </h3>
              <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                {pokemonData.weight}lbs
              </p>
            </div>
            <div className="py-[20px] flex justify-between">
              <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                Height
              </h3>
              <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                {pokemonData.height}cm
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate(`/details/${pokemonData.name}`)}
            className="bg-[#111827] hover:bg-[#F6BD0E] text-white font-bold py-2 px-5 rounded-lg text-base mx-auto my-2 transition-colors duration-300 block"
          >
            View Details
          </button>
        </div>
      </Tilt>
    </>
  );
}

export default PokemonCard;
