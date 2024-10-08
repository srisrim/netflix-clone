import React from 'react'
import { MOVIE_BANNER_CDN_URL } from '../utils/constant';

const MoviesCard = ({posterPath}) => {
  return (
    <div className='w-40'>
      <img alt="movie banner" src={MOVIE_BANNER_CDN_URL + posterPath} />
    </div>
  )
}

export default MoviesCard