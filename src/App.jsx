import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrencies } from './slice/currencySlice';
import Navigation from './components/Navigation';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyRate from './components/CurrencyRate';

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchContent = async () => {
  //     const response = await axios.get(`https://api.apilayer.com/fixer/latest&base=${base}&symbols`, { headers: { apikey: 'KTTErBwsDgDidqd57G7iIQpHOQJ7qnTQ' } });
  //     if (response.status === 200) {
  //       const { rates } = response.data;
  //       dispatch(setCurrencies(rates));
  //     }
  //   };
  //   fetchContent();
  // }, []);
  const rates = {
    AED: 0.0463,
    AFN: 1.109429,
    ALL: 1.291021,
    AMD: 4.889299,
    ANG: 0.02273,
    AOA: 6.430497,
    ARS: 2.890585,
    AUD: 0.018855,
    AWG: 0.022696,
    AZN: 0.021408,
    BAM: 0.022676,
    BBD: 0.025465,
    BDT: 1.360799,
    BGN: 0.022687,
    BHD: 0.004753,
    BIF: 35.635296,
    BMD: 0.012609,
    BND: 0.016874,
    BOB: 0.087154,
    BRL: 0.062086,
    BSD: 0.012612,
    BTC: 4.59908e-7,
    BTN: 1.038432,
    BWP: 0.169968,
    BYN: 0.031834,
    BYR: 247.132769,
    BZD: 0.025422,
    CAD: 0.017027,
    CDF: 28.811141,
    CHF: 0.011301,
    CLF: 0.000359,
    CLP: 9.909849,
    CNY: 0.087655,
    COP: 57.494609,
    CRC: 6.746544,
    CUC: 0.012609,
    CUP: 0.334134,
    CVE: 1.278365,
    CZK: 0.273736,
    DJF: 2.245524,
    DKK: 0.086334,
    DOP: 0.690074,
    DZD: 1.716033,
    EGP: 0.3896,
    ERN: 0.189132,
    ETB: 0.688202,
    EUR: 0.011593,
    FJD: 0.02794,
    FKP: 0.010129,
    GBP: 0.010081,
    GEL: 0.032467,
    GGP: 0.010129,
    GHS: 0.140001,
    GIP: 0.010129,
    GMD: 0.754636,
    GNF: 108.393233,
    GTQ: 0.098375,
    GYD: 2.667491,
    HKD: 0.098832,
    HNL: 0.309942,
    HRK: 0.08756,
    HTG: 1.834981,
    HUF: 4.282369,
    IDR: 186.572631,
    ILS: 0.046074,
    IMP: 0.010129,
    INR: 1.037333,
    IQD: 16.521439,
    IRR: 532.722423,
    ISK: 1.749477,
    JEP: 0.010129,
    JMD: 1.950689,
    JOD: 0.008954,
    JPY: 1.716331,
    KES: 1.728623,
    KGS: 1.101439,
    KHR: 52.033839,
    KMF: 5.717464,
    KPW: 11.347933,
    KRW: 16.849853,
    KWD: 0.00387,
    KYD: 0.01051,
    KZT: 5.685462,
    LAK: 221.276435,
    LBP: 189.309903,
    LKR: 3.947754,
    LRD: 2.102522,
    LSL: 0.243853,
    LTL: 0.037231,
    LVL: 0.007627,
    LYD: 0.060046,
    MAD: 0.127275,
    MDL: 0.224372,
    MGA: 55.443747,
    MKD: 0.714929,
    MMK: 26.485317,
    MNT: 43.737895,
    MOP: 0.101837,
    MRO: 4.501345,
    MUR: 0.576211,
    MVR: 0.193675,
    MWK: 12.939193,
    MXN: 0.221248,
    MYR: 0.056708,
    MZN: 0.797506,
    NAD: 0.243851,
    NGN: 5.831635,
    NIO: 0.461325,
    NOK: 0.134277,
    NPR: 1.661447,
    NZD: 0.02028,
    OMR: 0.004848,
    PAB: 0.012612,
    PEN: 0.046171,
    PGK: 0.044602,
    PHP: 0.707399,
    PKR: 3.591882,
    PLN: 0.052255,
    PYG: 90.92009,
    QAR: 0.045909,
    RON: 0.057238,
    RSD: 1.359358,
    RUB: 1,
    RWF: 14.137715,
    SAR: 0.04729,
    SBD: 0.105086,
    SCR: 0.166805,
    SDG: 7.565288,
    SEK: 0.130871,
    SGD: 0.016867,
    SHP: 0.015342,
    SLE: 0.28729,
    SLL: 249.024085,
    SOS: 7.174412,
    SRD: 0.467932,
    STD: 260.977008,
    SVC: 0.110353,
    SYP: 31.673738,
    SZL: 0.240112,
    THB: 0.425801,
    TJS: 0.137849,
    TMT: 0.044257,
    TND: 0.038393,
    TOP: 0.029764,
    TRY: 0.24798,
    TTD: 0.085608,
    TWD: 0.388532,
    TZS: 29.738591,
    UAH: 0.465813,
    UGX: 46.944076,
    USD: 0.012609,
    UYU: 0.491474,
    UZS: 143.998712,
    VEF: 31888.337365,
    VES: 0.319214,
    VND: 295.790185,
    VUV: 1.483709,
    WST: 0.033831,
    XAF: 7.605161,
    XAG: 0.000525,
    XAU: 0.000006257601,
    XCD: 0.034076,
    XDR: 0.009377,
    XOF: 7.605231,
    XPF: 1.384763,
    YER: 3.156614,
    ZAR: 0.240343,
    ZMK: 113.494439,
    ZMW: 0.23585,
    ZWL: 4.060033,
  };
  dispatch(setCurrencies(rates));
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
