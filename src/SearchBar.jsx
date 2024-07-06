import React, { useState } from "react";
import axios from 'axios';
import './SearchBar.css';

function SearchBar({ searchFinished , moviesFound ,searching }) {
  const [keyWord, setKeyWord] = useState("");


  function onclick() {
    searching()
    axios
      .get(`https://www.omdbapi.com/?apikey=5754105e1&s=${keyWord}`)
      .then((response) => {
        if (response.data.Response === "True") {
         searchFinished(response.data.Search);
        } else {
          alert(response.data.Error)
          searchFinished([]);
        }
        //
      }).catch((error) =>  {console.log(error)
        alert(error.message)})
      ;
  }
  return (
    <div className="nav-bar-container">
        <div className="logo">🍿&nbsp;usePopcorn</div>
        <div className="form-input">
      <input
        name="search-box"
        value={keyWord}
        placeholder="Search movies..."
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <button onClick={()=>{onclick()}}>Search</button>
      </div>
      <p>Found <b>{ moviesFound }</b> search results</p>
    </div>
  );
}

export default SearchBar;
