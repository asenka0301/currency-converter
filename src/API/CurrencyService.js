/* eslint-disable consistent-return */
import axios from 'axios';

// const url = 'http://localhost:4000'; // dev
const url = 'https://currency-converter-backend.onrender.com';

export default class CurrencyService {
  static async getRates(baseCurrency) {
    try {
      const response = await axios.get(`${url}/rates`, { params: { baseCurrency } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getRate(base, symbols) {
    try {
      const response = await axios.get(`${url}/convert`, { params: { base, symbols } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
