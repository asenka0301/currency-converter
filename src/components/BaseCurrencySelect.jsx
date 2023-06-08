import React from 'react';
import { useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import CustomComponent from './CustomComponent';
// import axios from 'axios';
// import { setCurrencies, setBaseCurrency } from '../slice/currencySlice';
import { generateOption } from '../utils/utils';

const BaseCurrencySelect = () => {
  // const dispatch = useDispatch();

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const base = useSelector((state) => {
    const { baseCurrency } = state.currenciesReducer;
    return baseCurrency;
  });

  const handleChange = async (e) => {
    const newValue = e.value;
    console.log(newValue);
    // dispatch(setBaseCurrency(e.target.value));
    // const { data } = await axios.get(`https://api.apilayer.com/fixer/latest&base=${e.target.value}&symbols`, { headers: { apikey: 'KTTErBwsDgDidqd57G7iIQpHOQJ7qnTQ' } });
    // dispatch(setCurrencies(data.rates));
  };

  return (
    <Select
      options={generateOption(currenciesRate)}
      defaultValue={generateOption(currenciesRate).find((item) => item.value === base)}
      components={{
        Option: CustomComponent(components.Option),
        SingleValue: CustomComponent(components.SingleValue),
      }}
      className="mt-2"
      onChange={handleChange}
    />
  );
};

export default BaseCurrencySelect;
