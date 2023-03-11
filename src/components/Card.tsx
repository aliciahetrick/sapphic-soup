import React from 'react'
import Movies from '../interfaces/Movies'

interface Props {
  movies: Movies
}

export function Card({ movies }: Props) {
  return (
    <div>
      <img src={`./images/${movies.image}`} alt="card" className="card-image" />
      <div className="card-title">{movies.title}</div>
    </div>
  )
}
