import React from 'react'
import './MovieCard.css'

function MovieCard({movie,showMovieDetails}) {

  return (
    <div className='card' onClick={()=>showMovieDetails(movie)}>
        <img src={movie.Poster} alt={movie.Title}/>
        <div className='card-input'>
        <div className='card-title'>{movie.Title}</div>
        <div className='card-year'>📅&nbsp;{movie.Year}</div>
        </div>
    </div>
  )
}

export default MovieCard