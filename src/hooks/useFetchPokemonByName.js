import { useGetPokemonByNameQuery } from "../redux/apiCalls/apiSlice";

export function useFetchPokemonByName(name) {
  return useGetPokemonByNameQuery(name);
}
