import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <nav className="home-wrapper">
      <Link to="/allMovies" style={{ textDecoration: 'none' }}>
        <img src="/images/thelma.jpg" className="home-image" />
        <h2 className="home-title">Browse</h2>
      </Link>
      <Link to="/randomMovie" style={{ textDecoration: 'none' }}>
        <img src="/images/the-handmaiden.jpg" className="home-image" />
        <h2 className="home-title">Discover</h2>
      </Link>
    </nav>
  )
}

export default Home
