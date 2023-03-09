import React from 'react'
import { movies } from './data'
import { Card } from './components/Card'

function App() {
  return (
    <div>
      <div>
        {movies.map((movie) => {
          return <Card key={movie.id} movies={movie} />
        })}
      </div>
    </div>
  )
}

export default App
