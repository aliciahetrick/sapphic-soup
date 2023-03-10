import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllMovies from './components/AllMovies'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RandomMovie from './components/RandomMovie'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllMovies />}></Route>
        <Route path="/random" element={<RandomMovie />}></Route>
      </Routes>
    </div>
  )
}

export default App
