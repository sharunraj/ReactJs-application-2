import MovieProps from "./MOvieProps";
export default function MovieComponent() {
  let allMovies = [
    "Inception",
    "The Dark Knight",
    "Pulp Fiction",
    "Eternal Sunshine of the Spotless Mind",
    "The Matrix",
    
  ];
  return (
    <>
      <div>MovieComponent</div>;
      <MovieProps movies={allMovies} />
    </>
  );
}
