import React, { useState } from 'react'
import { movies } from '../data'
import { Card } from './Card'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AllMovies() {
  const [selectedMovies, setSelectedMovies] = useState(movies)

  function filterMovies(genre: any) {
    if (genre === 'all') {
      setSelectedMovies(movies)
    } else {
      let filteredMovies = []
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].genres?.includes(genre)) {
          filteredMovies.push(movies[i])
        }
      }
      setSelectedMovies(filteredMovies)
    }
  }
  return (
    <Wrapper>
      <FilterMoviesWrapper>
        <FilteredMovie onClick={() => filterMovies('all')}>All</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('action')}>Action</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('comedy')}>Comedy</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('drama')}>Drama</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('horror')}>Horror</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('romance')}>Romance</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('sci-fi')}>Sci-fi</FilteredMovie>
        <Divider>|</Divider>
        <FilteredMovie onClick={() => filterMovies('thriller')}>Thriller</FilteredMovie>
      </FilterMoviesWrapper>
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

export const FilterMoviesWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
`

export const FilteredMovie = styled.div`
  color: #961e42;
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`

export const Divider = styled.div`
  color: #961e42;
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
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
  margin-top: 3em;
`
