import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>Sapphic Soup</HomeTitle>
      <HomeImage src="/images/soup.png" />
      <HomeTitle>LGBT movie recommendations that warm your soul.</HomeTitle>
    </HomeWrapper>
  )
}

export default Home

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 5em; */
  border-radius: 1em;
  margin-top: 15em;
  margin-bottom: 4em;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
`

export const HomeImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: auto;
  /* border-radius: 1.5em; */
`

export const HomeTitle = styled.h2`
  text-align: center;
  color: rgb(100, 118, 239);
  font-family: Raleway;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`
