
export default function MovieProps(allMovies) {
    let moviesList = allMovies.movies;
  return (
    <>
    <h2>List of Movies:</h2>
    <ul>
        {moviesList.map((movie) => <li key={movie}>{movie}</li>)}
    </ul>
    </>
  )
}
