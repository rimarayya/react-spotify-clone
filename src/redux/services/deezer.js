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
    getAlbumDetails: builder.query({
      query: ({ albumid }) => `/album/${albumid}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetAlbumDetailsQuery } = deezerApi;
