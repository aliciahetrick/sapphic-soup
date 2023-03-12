import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <HomeWrapper>
      <HomeTitle>Sapphic Soup</HomeTitle>
      <HomeSubtitle>LGBT movie recommendations that warm your soul.</HomeSubtitle>
      <HomeImage src="/images/soup.jpg" />
    </HomeWrapper>
  )
}

export default Home

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 1em;
  margin-top: 15em;
  margin-bottom: 4em;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
`

export const HomeImage = styled.img`
  object-fit: cover;
  width: 500px;
  height: auto;
  border-radius: 1.5em;
`

export const HomeTitle = styled.h2`
  text-align: center;
  color: #961e42;
  font-family: Raleway;
  font-weight: 800;
  font-size: 66px;
  text-transform: uppercase;
`

export const HomeSubtitle = styled.h2`
  margin-top: -1em;
  text-align: center;
  color: #961e42;
  font-family: Raleway;
  font-weight: 800;
  font-size: 19px;
  /* text-transform: uppercase; */
`
