import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyRate from './components/CurrencyRate';

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
