import React from 'react'
import { movies } from '../data'
import { Card } from './Card'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AllMovies() {
  return (
    <AllMoviesWrapper>
      <MoviesList>
        {movies.map((movie) => {
          return <Card key={movie.id} movies={movie} />
        })}
      </MoviesList>
    </AllMoviesWrapper>
  )
}

export default AllMovies

export const AllMoviesWrapper = styled.main`
  display: flex;
  flex-direction: row;
`

export const MoviesList = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  gap: 5em;
  margin-bottom: 8em;
  margin-top: 10em;
`
