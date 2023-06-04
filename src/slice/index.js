import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencySlice';
import converterReducer from './converterSlice';

export default configureStore({
  reducer: {
    currenciesReducer,
    converterReducer,
  },
});
