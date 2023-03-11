import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <div>
      <NavWrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          Home
        </Link>
        <Link to="randommovie" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          Discover
        </Link>
        <Link to="/allmovies" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          browse
        </Link>
      </NavWrapper>
    </div>
  )
}

export default Navbar

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 8em;
  z-index: 3;
  padding: 3em;

  background-color: rgb(166, 202, 245);
  font-family: Raleway;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`
