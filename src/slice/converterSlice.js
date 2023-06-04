/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencyHave: 'USD',
  currencyBuy: 'RUB',
  rate: [],
};

const converterReducer = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setRate(state, { payload }) {
      state.rate = payload;
    },
  },
});

export const { setRate } = converterReducer.actions;
export default converterReducer.reducer;
