import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload 
      // state.nowPlayingMovies is initialState.nowPlayingMovies 
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    }
  }
})
export const { addMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;