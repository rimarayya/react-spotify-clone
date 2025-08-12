import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/https://api.deezer.com",
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/chart",
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
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetArtistTopTracksQuery,
  useGetArtistDetailsQuery,
} = deezerApi;
