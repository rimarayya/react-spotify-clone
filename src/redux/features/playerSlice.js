import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const getSongsArray = (currentSongs) => {
  if (Array.isArray(currentSongs)) return currentSongs;
  if (currentSongs?.tracks?.data) return currentSongs.tracks.data;
  if (currentSongs?.tracks?.hits) return currentSongs.tracks.hits;
  return [];
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      const songsArray = getSongsArray(state.currentSongs);
      state.currentIndex = action.payload;
      state.activeSong = songsArray[action.payload] || {};
      state.isActive = true;
    },

    prevSong: (state, action) => {
      const songsArray = getSongsArray(state.currentSongs);
      state.currentIndex = action.payload;
      state.activeSong = songsArray[action.payload] || {};
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
