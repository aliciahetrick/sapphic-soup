import React, { useEffect } from 'react'
import { movies } from '../data'
import { Card } from './Card'
import Movies from '../interfaces/Movies'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    <RandomMovieWrapper>
      {/* <div className="random-movie">Random Movie</div> */}
      <Card key={randomMovie.id} movies={randomMovie} />
      <NextRandomMovieButton onClick={() => newMovie()}>&gt;</NextRandomMovieButton>
    </RandomMovieWrapper>
  )
}

export default RandomMovie

export const RandomMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8em;
  margin-top: 14em;
  gap: 3em;
`

export const NextRandomMovieButton = styled.button`
  all: unset;
  color: white;
  background-color: #ffacae;
  border-radius: 1em;
  padding: 0.5em;
  padding-left: 3em;
  padding-right: 3em;
  margin: 1em;
  font-family: Raleway;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  /* border: 2px solid #ffacae; */
`
