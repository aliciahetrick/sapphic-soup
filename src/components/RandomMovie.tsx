import React, { useEffect } from 'react'
import { movies } from '../data'
import { Card } from './Card'
import Movies from '../interfaces/Movies'
import { Link } from 'react-router-dom'

function RandomMovie() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // GENERATE A RANDOM MOVIE (START)
  function getRandomMovieNumberFunc(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const getRandomMovieNumber: number = getRandomMovieNumberFunc(0, movies.length)
  const randomMovie: Movies = movies[getRandomMovieNumber]
  // GENERATE A RANDOM MOVIE (END)

  function newMovie() {
    window.location.reload()
  }

  return (
    <div className="random-movie-card">
      {/* <div className="random-movie">Random Movie</div> */}
      <Card key={randomMovie.id} movies={randomMovie} />
      <button onClick={() => newMovie()} className="next-random-movie-button">
        &gt;
      </button>
    </div>
  )
}

export default RandomMovie
