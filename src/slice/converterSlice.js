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
    setCurrencyHave(state, { payload }) {
      state.currencyHave = payload;
    },
    setCurrencyBuy(state, { payload }) {
      state.currencyBuy = payload;
    },
  },
});

export const { setRate, setCurrencyHave, setCurrencyBuy } = converterReducer.actions;
export default converterReducer.reducer;
