import { baseUrl, publicToken } from '@config';
import { ICompany } from '@models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companyService = createApi({
  reducerPath: 'companyService',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompanyList: builder.query<ICompany[], any>({
      query: () => `stable/tops?token=${publicToken}`,
    }),
  }),
});

export const { useGetCompanyListQuery } = companyService;
