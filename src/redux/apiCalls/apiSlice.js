import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),

  endpoints: (builder) => ({
    getPokemonData: builder.query({
      query: (page) => `pokemon/?offset=${(page - 1) * 6}&limit=6`,
      providesTags: ["Pokemon"],
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    filterPokemonByGeneration: builder.query({
      query: () => `generation/`,
    }),
    filterPokemonByGenerationName: builder.query({
      query: (name) => `generation/${name}`,
    }),
  }),
});

export const {
  useGetPokemonDataQuery,
  useGetPokemonByNameQuery,
  useFilterPokemonByGenerationQuery,
  useFilterPokemonByGenerationNameQuery,
  useGetPokemonBySpeciesQuery,
} = apiSlice;
