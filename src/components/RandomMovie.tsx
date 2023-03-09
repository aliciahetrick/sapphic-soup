import React from 'react'
import { movies } from '../data'
import { Card } from './Card'
import Movies from '../interfaces/Movies'
import { Link } from 'react-router-dom'

function RandomMovie() {
  // GENERATE A RANDOM MOVIE (START)
  function getRandomMovieNumberFunc(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const getRandomMovieNumber: number = getRandomMovieNumberFunc(0, movies.length)
  const randomMovie: Movies = movies[getRandomMovieNumber]
  // GENERATE A RANDOM MOVIE (END)

  return (
    <div>
      <Link to="/">Home</Link>
      <div className="movies-list">Random Movie</div>
      <Card key={randomMovie.id} movies={randomMovie} />
    </div>
  )
}

export default RandomMovie
