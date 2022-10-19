import "./App.css";
import NavBar from "./Components/NavBar";
import movies from "../src/movies.json";
import MoviesList from "./Components/MoviesList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
