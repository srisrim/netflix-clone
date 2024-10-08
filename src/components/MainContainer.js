import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const moviesData = useSelector((store) => store?.movies?.nowPlayingMovies);
  
  if(!moviesData) return;

  const movie = moviesData[0];
  const { original_title, overview, id } = movie;
  
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer