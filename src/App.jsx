/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import CurrencyConverter from './components/pages/CurrencyConverter';
import CurrencyRate from './components/pages/CurrencyRate';

const App = () => (
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

export default App;
