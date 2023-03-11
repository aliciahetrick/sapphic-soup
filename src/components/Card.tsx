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
          <img className="card-image"></img>
          <div className="card-title">{movies.title}</div>
        </div>
      )}
      {!toggle && (
        <div onClick={() => toggleFunc()}>
          <img src={`./images/${movies.image}`} alt="card" className="card-image" />
          <div className="card-title">{movies.title}</div>
        </div>
      )}
    </div>
  )
}
