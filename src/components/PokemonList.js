import { useState } from "react";
import PokemonBox from "./PokemonBox";
import "../styles/pokemonList.css";
import { useQuery } from "@tanstack/react-query";

const colors = ["#8bbe8a", "#ffa756", "#58abf6"];

export default function PokemonList() {
  const [page, setPage] = useState(0);

  const fetchPokemons = (page = 0) =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${24 * page}&limit=24`
    ).then((response) => response.json());

  const { data } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => fetchPokemons(page),
    keepPreviousData: true,
  });

  const pokemonsResults = data?.results;

  const {
    data: detailedPokemons,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemons", "details", data?.next],

    queryFn: () =>
      Promise.all(
        pokemonsResults.map((pokemon) => {
          console.log(pokemon);
          return fetch(pokemon.url).then((res) => res.json());
        })
      ),

    enabled: !!pokemonsResults,
  });

  function handlePrevious() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleNext() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="pokemonList">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          detailedPokemons.map((pokemonData) => {
            return (
              <PokemonBox
                key={pokemonData.id}
                pokemonData={pokemonData}
                color={colors[pokemonData.name.length % colors.length]}
              />
            );
          })
        )}
      </div>
      <div className="button-div">
        <button
          className="control-button"
          onClick={handlePrevious}
          disabled={page === 0}
        >
          Previous
        </button>
        <button className="control-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
