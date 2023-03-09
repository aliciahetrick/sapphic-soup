import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>this is the home page</p>
      <Link to="/allMovies">All Movies</Link>
      <Link to="/randomMovie">Random Movie</Link>
    </div>
  )
}

export default Home
