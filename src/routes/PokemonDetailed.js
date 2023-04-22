import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import capitalize from "../helper/capitalize";
import "../styles/pokemonDetailed.css";

const pokemonDetailQuery = (id) => ({
  queryKey: ["pokemon", "detail", id],

  queryFn: () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = pokemonDetailQuery(params.id);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export default function PokemonDetailed() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useQuery(pokemonDetailQuery(id));

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="pokemonDetailed">
          <div className="pokemonDetailed-info-id">#{data.id}</div>

          <h1 className="pokemonDetailed-info-name">{capitalize(data.name)}</h1>

          <div className="pokemonDetailed-image">
            <img src={data.sprites.front_default} alt={data.name} />
          </div>
          <div className="pokemonDetailed-info">
            <div className="pokemonDetailed-info-types">
              <span className=" center pokemonDetailed-info-title">Types:</span>
              {data.types.map((type) => (
                <div key={type.type.name}>- {type.type.name}</div>
              ))}
            </div>
            <div className="pokemonDetailed-info-abilities">
              <span className=" center pokemonDetailed-info-title">
                Abilities:
              </span>
              {data.abilities.map((ability) => (
                <div key={ability.ability.name}>
                  - {ability.ability.name}
                  {ability.slot === 1 && " (first ability)"}
                  {ability.slot === 2 && " (second ability)"}
                  {ability.slot === 3 && " (third ability)"}
                </div>
              ))}
            </div>
            <div className="pokemonDetailed-info-height">
              <span className="pokemonDetailed-info-title">Height: </span>
              {data.height * 10}cm
            </div>
            <div className="pokemonDetailed-info-weight">
              <span className="pokemonDetailed-info-title">Weight: </span>{" "}
              {data.weight * 100}g
            </div>
          </div>
        </div>
      )}
    </>
  );
}
