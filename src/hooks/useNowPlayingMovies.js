import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMoviesPlayingNow = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addMovies(json.results))
  }

  useEffect(() => {
    getMoviesPlayingNow();
  }, []);
}

export default useNowPlayingMovies;