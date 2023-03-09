import React from 'react'
import { movies } from '../data'
import { Card } from './Card'
import { Link } from 'react-router-dom'

function AllMovies() {
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="movies-list">
        {movies.map((movie) => {
          return <Card key={movie.id} movies={movie} />
        })}
      </div>
    </div>
  )
}

export default AllMovies
