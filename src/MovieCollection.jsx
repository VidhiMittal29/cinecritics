import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import MovieDetailCard from './MovieDetailCard'
import './MovieCollection.css'

function MovieCollection({movies,addToAlreadyWatched,moviesAlreadyWatched,loading}) {
    const[selectedMovie,setSelectedMovie]=useState(null)
  

    function showMovieDetails(movie) {
        setSelectedMovie(movie)
    }
 

  return (
    <div className='secondary-container'>
      <div className='card-container'>

          {loading ? <div>Loading</div> : movies ?
           movies.map((movie,index)=><MovieCard movie={movie} key={index} showMovieDetails={showMovieDetails}/>): 
           <div className='invalid-movie'>No results Found</div>}
        </div>
        
          {selectedMovie ?
          <div className='card-container detail'>
            <MovieDetailCard movie={selectedMovie} addToAlreadyWatched={addToAlreadyWatched} moviesAlreadyWatched={moviesAlreadyWatched} cancelCard={()=>setSelectedMovie(null)}/>
            </div>
          : null}
    </div>
  )
}

export default MovieCollection