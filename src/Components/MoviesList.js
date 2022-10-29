import React from "react";
import MovieCard from "../Components/MovieCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className="MoviesList" style={{ borderRadius: "20px" }}>
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase())
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MoviesList;
