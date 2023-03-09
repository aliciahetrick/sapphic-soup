import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllMovies from './components/AllMovies'
import Home from './components/Home'
import RandomMovie from './components/RandomMovie'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allmovies" element={<AllMovies />}></Route>
        <Route path="/randommovie" element={<RandomMovie />}></Route>
      </Routes>
    </div>
  )
}

export default App
