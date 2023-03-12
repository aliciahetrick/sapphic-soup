import React, { useState } from 'react'
import Movies from '../interfaces/Movies'
import styled from 'styled-components'

interface Props {
  movies: Movies
}

export function Card({ movies }: Props) {
  const [toggle, setToggle] = useState(false)

  function toggleFunc() {
    setToggle(!toggle)
  }

  return (
    <div>
      {toggle && (
        <div onClick={() => toggleFunc()}>
          <MovieSynopsisContainer>
            <CardImage />
            <MovieSynopsis>
              <CardTitle>{movies.title}</CardTitle>
              <p>♥</p>
              {movies.synopsis}
            </MovieSynopsis>
          </MovieSynopsisContainer>
        </div>
      )}
      {!toggle && (
        <div onClick={() => toggleFunc()}>
          <CardImage src={`./images/${movies.image}`} alt="card" />
        </div>
      )}
    </div>
  )
}

export const CardTitle = styled.div`
  all: unset;
  /* max-width: 300px;
  text-align: center; */
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: #961e42;
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 0.5em;
`

export const MovieSynopsisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardImage = styled.img`
  height: 400px;
  width: 273.22px;
  object-fit: cover;
  border-radius: 1em;
  background-color: #f8c0c1;
  border-bottom: 10px solid #f4a5a6;
  border-right: 10px solid #f4a5a6;
`

export const MovieSynopsis = styled.div`
  position: absolute;
  text-align: center;
  padding: 5px 7px;
  border-radius: 8px;
  font-family: Raleway;
  font-weight: 600;
  /* text-transform: uppercase; */
  color: #961e42;
  max-width: 15em;
  z-index: 1;
`
