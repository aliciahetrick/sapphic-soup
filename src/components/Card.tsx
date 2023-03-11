import React, { useState } from 'react'
import Movies from '../interfaces/Movies'

interface Props {
  movies: Movies
}

export function Card({ movies }: Props) {
  const [toggle, setToggle] = useState(false)

  function toggleFunc() {
    console.log('toggle', toggle)
    setToggle(!toggle)
  }

  return (
    <div>
      {toggle && (
        <div onClick={() => toggleFunc()}>
          <div className="card-title">{movies.title}</div>
          <div className="movie-synopsis-container">
            <img className="card-image" />
            <div className="movie-synopsis">
              <p>♥</p>
              {movies.synopsis}
            </div>
          </div>
        </div>
      )}
      {!toggle && (
        <div onClick={() => toggleFunc()}>
          <div className="card-title">{movies.title}</div>
          <img src={`./images/${movies.image}`} alt="card" className="card-image" />
        </div>
      )}
    </div>
  )
}
