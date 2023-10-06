import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filters: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterSet(_, action) {
      return action.payload;
    },
  },
});

export const getFilter = state => state.filters.filters;

export const { filterSet } = filterSlice.actions;
