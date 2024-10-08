import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies)
  return (
      movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 pl-4 md:pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
        </div>
      </div>
      )
  )
}

export default SecondaryContainer