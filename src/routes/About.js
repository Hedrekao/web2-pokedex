import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About the page</h1>
      <p className="about-text">
        A Pokédex is a webpage dedicated to providing information on different
        Pokémon species. The page includes a list of all the Pokémon available,
        with a thumbnail image and their name. Clicking on a Pokémon's thumbnail
        takes you to its individual page, which provides more detailed
        information about the species. This information could include the
        Pokémon's type, height, weight, abilities, and other stats. Overall, a
        Pokédex page is a helpful resource for any trainer looking to learn more
        about the many different Pokémon that inhabit the world. It was made by
        me, Tomasz Sloma. I hope you like it. (I know it's not perfect visually,
        but I just enjoy logic much more than design.)
      </p>
    </div>
  );
}
