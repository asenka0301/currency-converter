/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseCurrency: 'RUB',
};

const currenciesReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies(state, { payload }) {
      state.rates = Object.entries(payload);
    },
  },
});

export const { setCurrencies } = currenciesReducer.actions;
export default currenciesReducer.reducer;
