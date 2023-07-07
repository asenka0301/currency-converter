const PORT = 4000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '/etc/secrets/.env' });

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('hi');
});

app.get('/rates', async (req, res) => {
  const base = req.query.baseCurrency;
  try {
    const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols&base=${base}`, { headers: { apikey: process.env.REACT_APP_API_KEY } });
    res.json(response.data);
  } catch (e) {
    console.log(e);
  }
});

app.get('/convert', async (req, res) => {
  const baseCurrency = req.query.base;
  const currencies = req.query.symbols;
  try {
    console.log(req.query);
    const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${currencies}&base=${baseCurrency}`, { headers: { apikey: process.env.REACT_APP_API_KEY } });
    res.json(response.data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(4000, () => console.log(`Server is running on port ${PORT}`));
