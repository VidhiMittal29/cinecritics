import React, { useEffect, useState } from "react";
import Star from "./Star";
import axios from "axios";
import './MovieDetailCard.css'

function MovieDetailCard({
  movie,
  addToAlreadyWatched,
  moviesAlreadyWatched,
  cancelCard,
}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://www.omdbapi.com/?apikey=5754105e&t=${movie.Title}`).then((response) => {
      setMovieDetails(response.data);
      setIsLoading(false)
    });
    //
  }, [movie]);

  function selfRating(value) {
    setRating(value);
  }
  console.log(movieDetails);

  function addToList(movieDetails, rating) {
    addToAlreadyWatched(movieDetails, rating)
    cancelCard()
  }
  return (
    isLoading ? <div className="loader"> LOADING....</div>:
   <div className="detail-container">
      <button onClick={cancelCard}>Back</button>
      <div className="detail-input-container">
        <img src={movieDetails.Poster}   alt={movieDetails.Title} />
        <div className="detail-input">
          <div className="detail-input-title">{movieDetails.Title}</div>
          <div>
            {movieDetails.Released==='N/A'? '' : movieDetails.Released} •&nbsp;
            {movieDetails.Runtime==='N/A'? '' : movieDetails.Runtime}
          </div>
          <div>{movieDetails.Genre==='N/A'? '' : movieDetails.Genre}</div>⭐{movieDetails.imdbRating==='N/A'? '' : movieDetails.imdbRating} IMDb Rating
        </div>
      </div>
      <div className="rating-input">
      {moviesAlreadyWatched.find((x)=>x.Title===movie.Title) ? `You rated this movie ${
        moviesAlreadyWatched[moviesAlreadyWatched.findIndex((x)=>x.Title===movie.Title)].selfRating
      }⭐` : (
        <div>
          <Star selfRating={selfRating} />
          { rating ? <button className="add-button" onClick={()=>addToList(movieDetails,rating)}>
            + Add To List
          </button>: null }
        </div>
      )}
      </div>
      <div className="plot-input">
        <div className="plot">{movieDetails.Plot==='N/A'? 'No description' : movieDetails.Plot}</div>
        <div>Starring {movieDetails.Actors==='N/A'? '' : movieDetails.Actors}</div>
        <div>Directed By {movieDetails.Director==='N/A'? '' : movieDetails.Director}</div>
      </div>
    </div> 
  );
}

export default MovieDetailCard;
