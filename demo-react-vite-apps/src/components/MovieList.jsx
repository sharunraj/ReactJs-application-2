import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg",
      description:
        "A skilled thief steals secrets from within the subconscious during the dream state.",
      releaseDate: "2010-07-16",
      rating: "8.8/10",
    },
    {
      id: 2,
      title: "Interstellar",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
      releaseDate: "2014-11-07",
      rating: "8.6/10",
    },
    {
      id: 3,
      title: "The Dark Knight",
      image:
        "https://images.squarespace-cdn.com/content/v1/5fc28a8d8fbfcf634c11b69c/1612823532797-R575JX5GED8FR6AHXYCW/91KkWf50SoL._SL1500_.jpg?format=1000w",
      description:
        "Batman raises the stakes in his war on crime with the help of Lieutenant Jim Gordon and DA Harvey Dent.",
      releaseDate: "2008-07-18",
      rating: "9.0/10",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      image:
        "https://th.bing.com/th/id/OIP.xkD3SJsc7E1tO2uarQWZeQHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      releaseDate: "1990",
      rating: "8.9/10",
    },
  ];

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const toggleDetails = (id) => {
    setSelectedMovieId(selectedMovieId === id ? null : id);
  };

  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-decoration-underline">Movie List</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-4 p-3 card text-center">
            <div
              onClick={() => toggleDetails(movie.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="img-thumbnail card-img-top"
              />
              <h4 className="mt-2 ">{movie.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1050,
          }}
        >
          <div
            className="card p-3 text-center"
            style={{ maxWidth: "400px", width: "90%" }} // Decreased card width
          >
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="card-img-top img-fluid mb-3"
              style={{ maxHeight: "250px", objectFit: "contain" }} // Decreased image height
            />
            <div className="card-body">
              <h5 className="card-title">{selectedMovie.title}</h5>
              <p className="card-text">{selectedMovie.description}</p>
              <p className="card-text">
                <strong>Release Date:</strong> {selectedMovie.releaseDate}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {selectedMovie.rating}
              </p>
              <button
                type="button"
                className="btn btn-secondary mt-2"
                onClick={() => toggleDetails(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
