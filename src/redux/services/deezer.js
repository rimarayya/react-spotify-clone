import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deezerApi = createApi({
  reducerPath: 'deezerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com',
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/chart',
    }),
    getSongsByGenre: builder.query({
      query: (genreId) => `/chart/${genreId}/tracks`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
    getAlbumDetails: builder.query({
      query: ({ albumid }) => `/album/${albumid}`,
    }),
    getArtistTopTracks: builder.query({
      query: (artistId) => `/artist/${artistId}/top?limit=10`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artist/${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/editorial/${countryCode}/charts`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?q=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetArtistTopTracksQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = deezerApi;
