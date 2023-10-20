// PokemonDetailPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../redux/apiCalls/apiSlice";
import PokemonDetail from "../component/PokemonDetail";
import Loader from "../component/Loader";

function PokemonDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const {
    data: pokemonDetail,
    isLoading,
    isSuccess,
    isError,
  } = useGetPokemonByNameQuery(name);
  console.log(pokemonDetail);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <span>Error loading Pokémon details.</span>}
      {isSuccess && (
        <PokemonDetail
          pokemonDetail={pokemonDetail && pokemonDetail}
          navigate={navigate}
        />
      )}
    </>
  );
}

export default PokemonDetailPage;
