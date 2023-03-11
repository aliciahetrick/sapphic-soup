import React, { useState } from 'react'
import { movies } from '../data'
import { Card } from './Card'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AllMovies() {
  const [selectedMovies, setSelectedMovies] = useState(movies)

  function filterMovies(genre: any) {
    let filteredMovies = []
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].genres?.includes(genre)) {
        filteredMovies.push(movies[i])
      }
    }
    setSelectedMovies(filteredMovies)
  }
  return (
    <Wrapper>
      <div onClick={() => filterMovies('action')}>Action</div>
      <AllMoviesWrapper>
        <MoviesList>
          {selectedMovies.map((movie) => {
            return <Card key={movie.id} movies={movie} />
          })}
        </MoviesList>
      </AllMoviesWrapper>
    </Wrapper>
  )
}

export default AllMovies

export const Wrapper = styled.main`
  margin-bottom: 8em;
  margin-top: 10em;
`

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
