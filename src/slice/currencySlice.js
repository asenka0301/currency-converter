/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseCurrency: 'RUB',
  rates: [],
};

const currenciesReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies(state, { payload }) {
      state.rates = Object.entries(payload);
    },
    setBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
});

export const { setCurrencies, setBaseCurrency } = currenciesReducer.actions;
export default currenciesReducer.reducer;
