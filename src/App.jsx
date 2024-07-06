import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCollection from "./MovieCollection";
import AlreadyWatchedList from "./AlreadyWatchedList";
import "./App.css"

function App() {
  const [moviesAlreadyWatched, setMoviesAlreadyWatched] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function searchFinished(movies) {
    setSearchResults(movies);
    setLoading(false)
  }

  function searching() {
    setLoading(true);
  }

  function addToAlreadyWatched(movie,rating) {
    movie = {...movie,...{selfRating: rating}}
    setMoviesAlreadyWatched([...moviesAlreadyWatched, movie]);
  }

  function deleteFromAlreadyWatched(movie) {
    setMoviesAlreadyWatched(moviesAlreadyWatched.filter((x)=>x.Title !== movie.Title))
  }
  return (
    <div>
      <SearchBar searchFinished={searchFinished} moviesFound={searchResults.length} searching={searching}/>
      <div className="main-container">
      <MovieCollection
        movies={searchResults}
        addToAlreadyWatched={addToAlreadyWatched}
        moviesAlreadyWatched={moviesAlreadyWatched}
        loading={loading}

      />
      <AlreadyWatchedList movies={moviesAlreadyWatched} deleteFromAlreadyWatched={deleteFromAlreadyWatched}/>
      </div>
    </div>
  );
}

export default App;
