/* eslint-disable consistent-return */
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class CurrencyService {
  static async getRates(baseCurrency) {
    try {
      const response = await axios.get(`https://api.apilayer.com/fixer/latest&base=${baseCurrency}&symbols`, { headers: { apikey: API_KEY } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
