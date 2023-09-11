import { baseUrl, publicToken } from '@config';
import { ICompany } from '@models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companyService = createApi({
  reducerPath: 'companies',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompanyList: builder.query<ICompany[], any>({
      query: () => `?token=${publicToken}`,
    }),
  }),
});

export const { useGetCompanyListQuery } = companyService;
