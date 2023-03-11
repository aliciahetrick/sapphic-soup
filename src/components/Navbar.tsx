import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          Home
        </Link>
        <Link to="randommovie" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          Discover
        </Link>
        <Link to="/allmovies" style={{ textDecoration: 'none', color: '#fff5fa' }}>
          browse
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
