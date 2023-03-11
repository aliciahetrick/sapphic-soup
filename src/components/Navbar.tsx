import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <div>
      <NavWrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          Home
        </Link>
        <Link to="/all" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          browse
        </Link>
        <Link to="random" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          Discover
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

  background-color: #ffacae;
  font-family: Raleway;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`
