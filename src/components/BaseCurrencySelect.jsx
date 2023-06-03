import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
// import axios from 'axios';
// import { setCurrencies, setBaseCurrency } from '../slice/currencySlice';

const BaseCurrencySelect = () => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const base = useSelector((state) => {
    const { baseCurrency } = state.currenciesReducer;
    return baseCurrency;
  });

  const [inputValue, setInputValue] = useState(base);

  const handleChange = async (e) => {
    setInputValue(e.target.value);
    // dispatch(setBaseCurrency(e.target.value));
    // const { data } = await axios.get(`https://api.apilayer.com/fixer/latest&base=${e.target.value}&symbols`, { headers: { apikey: 'KTTErBwsDgDidqd57G7iIQpHOQJ7qnTQ' } });
    // dispatch(setCurrencies(data.rates));
  };

  return (
    <Form.Select value={inputValue} onChange={handleChange}>
      { currenciesRate
      && currenciesRate.map(([code]) => (
        <option
          key={_.uniqueId()}
          value={code}
        >
          {`${code} ${t(`currencyNames.${code}`)}`}
        </option>
      ))}
    </Form.Select>
  );
};

export default BaseCurrencySelect;
