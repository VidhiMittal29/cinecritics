import React from 'react'
import './AlreadyWatchedList.css'

function AlreadyWatchedList({movies,deleteFromAlreadyWatched}) {

  var avgRating = movies.reduce((accumulator, obj) => (accumulator + (obj.imdbRating==='N/A'? accumulator : Number(obj.imdbRating))), 0)/movies.length;
  var avgSelfRating = movies.reduce((accumulator, obj) => (accumulator + (obj.selfRating)), 0)/movies.length;
    var arr=[]
    arr=(movies.map((movie)=>movie.Runtime.split(' ')[0]))
    var avgTime = arr.reduce((accumulator, obj) => (accumulator + Number(obj)), 0)/movies.length;
    
  return (
    <div className='movies-watched-container'>
      <div className='boundary-container'>
        <div className='title'>Movies you watched </div>
        <div className='avg-data-calculated'>
          🎦{movies.length}movies
        <div>⭐{avgRating ? Math.round((avgRating)*10)/10 : 0}</div>
        <div>⌛{avgTime ? Math.round(avgTime) :0} mins</div>
        <div>🌟{avgSelfRating ? Math.round((avgSelfRating)*10)/10 : 0}</div>
        </div>
        </div>

       { movies.map((movie,index)=>
          <div key={index} className='movie-card-container'>
            
            <img src={movie.Poster} alt={movie.Title}/>
            <div className='movie-title'>
              {movie.Title}
              <div className='movie-info'>
                <div>⭐{movie.imdbRating==='N/A'? '' : movie.imdbRating}</div>
                <div>🌟{movie.selfRating==='N/A'? '' : movie.selfRating}</div>
                <div>⌛{movie.Runtime==='N/A'? '' : movie.Runtime}</div>
              </div>
            </div>
    
            <button className="delete-button" onClick={()=>(deleteFromAlreadyWatched(movie))}>x</button>
          </div>)}
    </div>
  )
}

export default AlreadyWatchedList