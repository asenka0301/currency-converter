/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyService from './API/CurrencyService';
import { setCurrencies } from './slice/currencySlice';
import Navigation from './components/Navigation';
import CurrencyConverter from './components/pages/CurrencyConverter';
import CurrencyRate from './components/pages/CurrencyRate';
import useLoad from './hooks';

const App = () => {
  const load = useLoad();
  const dispatch = useDispatch();
  const base = useSelector((state) => {
    const { baseCurrency } = state.currenciesReducer;
    return baseCurrency;
  });

  useEffect(() => {
    const fetchContent = async () => {
      load.setLoading(true);
      const response = await CurrencyService.getRates(base);
      if (response.status === 200) {
        const { rates } = response.data;
        dispatch(setCurrencies(rates));
      }
      load.setLoading(false);
    };
    fetchContent();
  }, [base]);

  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/currencyConverter" element={<CurrencyConverter />} />
          <Route path="/" element={<CurrencyRate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
