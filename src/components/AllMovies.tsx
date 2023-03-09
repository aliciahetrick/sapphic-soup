import React from 'react'
import { movies } from '../data'
import { Card } from './Card'

function AllMovies() {
  return (
    <div>
      <div className="movies-list">
        {movies.map((movie) => {
          return <Card key={movie.id} movies={movie} />
        })}
      </div>
    </div>
  )
}

export default AllMovies
