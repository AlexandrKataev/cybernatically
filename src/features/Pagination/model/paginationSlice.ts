import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/redux/store';

interface IPagination {
  totalPages: number | null;
  currentPage: number;
}

const initialState: IPagination = {
  totalPages: null,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = Math.floor(action.payload / 10);
    },
  },
});

export const selectCurrentPage = (state: RootState) => state.paginationReducer.currentPage;
export const selectTotalPages = (state: RootState) => state.paginationReducer.totalPages;

export const paginationReducer = paginationSlice.reducer;

export const { resetCurrentPage, setCurrentPage, setTotalPages } = paginationSlice.actions;
