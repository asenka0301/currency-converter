import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { setCurrencyHave, setRate } from '../slice/converterSlice';
import CustomComponent from './CustomComponent';
import CurrencyService from '../API/CurrencyService';
import { generateOption } from '../utils/utils';

const SelectToSell = ({ selectToSell, setSelectToSell }) => {
  const dispatch = useDispatch();

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const purchasedCurrency = useSelector((state) => {
    const { currencyBuy } = state.converterReducer;
    return currencyBuy;
  });

  const handleChange = async (e) => {
    const newValue = e.value;
    const response = await CurrencyService.getRate(newValue, purchasedCurrency);
    if (response.status === 200) {
      const { rates } = response.data;
      setSelectToSell(newValue);
      dispatch(setCurrencyHave(newValue));
      dispatch(setRate(rates));
    }
  };

  const getValue = (rate, currency) => (
    generateOption(rate).find((item) => item.value === currency)
  );

  return (
    currenciesRate
    && (
      <Select
        options={generateOption(currenciesRate)}
        value={getValue(currenciesRate, selectToSell)}
        components={{
          Option: CustomComponent(components.Option),
          SingleValue: CustomComponent(components.SingleValue),
        }}
        className="mt-2"
        isOptionDisabled={(option) => option.value === purchasedCurrency}
        onChange={handleChange}
      />
    )
  );
};

export default SelectToSell;
