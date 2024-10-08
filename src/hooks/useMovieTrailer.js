import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  const getTrailerVideo = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
    const jsonData = await data.json();
    const filteredTrailers = jsonData.results.filter(video => video.type === 'Trailer');
    const trailer = filteredTrailers.length ? filteredTrailers[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    !trailerVideo && getTrailerVideo()
  }, []);
}

export default useMovieTrailer