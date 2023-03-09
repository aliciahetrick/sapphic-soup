import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllMovies from './components/AllMovies'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allmovies" element={<AllMovies />}></Route>
      </Routes>
    </div>
  )
}

export default App
