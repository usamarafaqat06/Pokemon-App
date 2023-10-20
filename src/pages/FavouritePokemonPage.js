import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";

function FavouritePokemonPage() {
  const [favorites, toggleFavorite] = useFavorites("favorites");
  const navigate = useNavigate();

  return (
    <Tilt>
      <div className="relative container mx-auto pt-[50px] px-5">
        <h1 className="text-center font-bold py-5">Favorite Pokémon</h1>
        {favorites.length === 0 ? (
          <h3 className="text-center ">No favorite items yet.</h3>
        ) : (
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {favorites.map((item) => (
              <div className="border relative   rounded-lg bg-white shadow-xl w-[300px]  lg:w-[350px]">
                <div className="px-2 py-4">
                  <div className="flex justify-center text-[22px] text-[#333] font-sans font-bold capitalize gap-x-[20px]">
                    <h2 className="block "> {item.name}</h2>
                    <button
                      onClick={() => toggleFavorite(item)}
                      className=" font-bold py-2 absolute right-[20px] top-[20px]  
                    text-[red]
                   text-[25px] block rounded-md  transition-colors duration-300"
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
                      src={item.sprites?.front_default}
                      alt={item?.name}
                    />
                  </div>
                  <div className="py-[20px] border-b flex justify-between">
                    <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                      Weight
                    </h3>
                    <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                      {item.weight}lbs
                    </p>
                  </div>
                  <div className="py-[20px] flex justify-between">
                    <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                      Height
                    </h3>
                    <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                      {item.height}cm
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/details/${item.name}`)}
                  className="bg-[#111827] hover:bg-[#F6BD0E] text-white font-bold py-2 px-5 rounded-lg text-base mx-auto my-2 transition-colors duration-300 block"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Tilt>
  );
}

export default FavouritePokemonPage;
