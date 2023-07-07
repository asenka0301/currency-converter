/* eslint-disable consistent-return */
import axios from 'axios';

export default class CurrencyService {
  static async getRates(baseCurrency) {
    try {
      const response = await axios.get('http://localhost:4000/rates', { params: { baseCurrency } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getRate(base, symbols) {
    try {
      const response = await axios.get('http://localhost:4000/convert', { params: { base, symbols } });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
