import React from "react";
import MovieCard from "../Components/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className="MoviesList" style={{ borderRadius: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
