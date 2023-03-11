import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
  return (
    <HomeWrapper>
      <Link to="/allMovies" style={{ textDecoration: 'none' }}>
        <HomeImage src="/images/thelma.jpg" />
        <HomeTitle>Browse</HomeTitle>
      </Link>
      <Link to="/randomMovie" style={{ textDecoration: 'none' }}>
        <HomeImage src="/images/the-handmaiden.jpg" />
        <HomeTitle>Discover</HomeTitle>
      </Link>
    </HomeWrapper>
  )
}

export default Home

export const HomeWrapper = styled.div`
  display: flex;
  gap: 5em;
  border-radius: 1em;
  margin-top: 15em;
  margin-bottom: 4em;
  justify-content: center;
  border-radius: 1em;
`

export const HomeImage = styled.img`
  object-fit: cover;
  width: 450px;
  height: 350px;
  border-radius: 1.5em;
`

export const HomeTitle = styled.h2`
  text-align: center;
  color: rgb(100, 118, 239);
  font-family: Raleway;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`
