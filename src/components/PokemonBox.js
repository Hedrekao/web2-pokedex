import { Link } from "react-router-dom";
import "../styles/pokemonBox.css";
import capitalize from "../helper/capitalize";

export default function PokemonBox({ pokemonData, color }) {
  return (
    pokemonData && (
      <Link to={`/pokemon/${pokemonData.name}`}>
        <div className="box" style={{ backgroundColor: color }}>
          <div>
            <div className="small-text">#{pokemonData.id}</div>
            <div className="pokemon-name">{capitalize(pokemonData.name)}</div>
          </div>
          <div>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
          </div>
        </div>
      </Link>
    )
  );
}
