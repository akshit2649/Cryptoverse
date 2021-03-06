import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '713f2414d7msh73f7a8dd097594ap13b22cjsn8aef060a0c6f',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptosHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          `/coin/${coinId}/history/?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptosHistoryQuery,
} = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0',
//   },
//   headers: {
//     'X-RapidAPI-Key': '713f2414d7msh73f7a8dd097594ap13b22cjsn8aef060a0c6f',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//   },
// };
