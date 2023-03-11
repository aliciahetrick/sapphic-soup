import React from 'react'
import { movies } from '../data'
import { Card } from './Card'
import { Link } from 'react-router-dom'

function AllMovies() {
  return (
    <main className="all-movies-wrapper">
      <section className="movies-list">
        {movies.map((movie) => {
          return <Card key={movie.id} movies={movie} />
        })}
      </section>
    </main>

    //   <Cards>
    //     {allCampuses.map((campus) => {
    //       return (
    //         <div key={campus.id}>
    //           <Link to={`/campuses/${campus.id}`} style={{ textDecoration: 'none' }}>
    //             <CampusName>{campus.name}</CampusName>
    //           </Link>
    //           <ImageAndDeleteWrapper>
    //             <Link to={`/campuses/${campus.id}`}>
    //               <img src={`../../${campus.imageUrl}`} className="campus-image" />
    //             </Link>
    //             <DeleteButton onClick={() => handleDelete(campus.id)}>X</DeleteButton>
    //           </ImageAndDeleteWrapper>
    //         </div>
    //       )
    //     })}
    //   </Cards>
    // )
    // </WrapperContent>
  )
}

export default AllMovies
