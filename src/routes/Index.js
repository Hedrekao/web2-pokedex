import PokemonList from "../components/PokemonList";
export default function Index() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "purple", fontSize: "40px" }}>
        Pokedex
      </h1>
      <PokemonList />
    </>
  );
}
