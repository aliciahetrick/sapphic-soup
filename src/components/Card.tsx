import React from 'react'
import Movies from '../interfaces/Movies'

interface Props {
  movies: Movies
}

export function Card({ movies }: Props) {
  return (
    <div>
      <div>{movies.title}</div>
      <img src={`./images/${movies.image}`} alt="card" />
    </div>
  )
}
