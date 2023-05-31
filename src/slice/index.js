import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencySlice';

export default configureStore({
  reducer: {
    currenciesReducer,
  },
});
