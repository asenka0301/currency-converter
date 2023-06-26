/* eslint-disable consistent-return */
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class CurrencyService {
  static async getRates(baseCurrency) {
    try {
      const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols&base=${baseCurrency}`, { headers: { apikey: API_KEY } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getRate(base, symbols) {
    try {
      const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, { headers: { apikey: API_KEY } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
