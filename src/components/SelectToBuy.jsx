import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { setCurrencyBuy, setRate } from '../slice/converterSlice';
import CustomComponent from './CustomComponent';
import CurrencyService from '../API/CurrencyService';
import { generateOption, getValue } from '../utils/utils';

const SelectToBuy = ({ selectToBuy, setSelectToBuy }) => {
  const dispatch = useDispatch();

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const soldCurrency = useSelector((state) => {
    const { currencyHave } = state.converterReducer;
    return currencyHave;
  });

  const handleChange = async (e) => {
    const newValue = e.value;
    const response = await CurrencyService.getRate(soldCurrency, newValue);
    if (response.status === 200) {
      const { rates } = response.data;
      setSelectToBuy(newValue);
      dispatch(setCurrencyBuy(newValue));
      dispatch(setRate(rates));
    }
  };

  return (
    <Select
      value={getValue(currenciesRate, selectToBuy)}
      options={currenciesRate && generateOption(currenciesRate)}
      components={{
        Option: CustomComponent(components.Option),
        SingleValue: CustomComponent(components.SingleValue),
      }}
      className="mt-2"
      isOptionDisabled={(option) => option.value === soldCurrency}
      onChange={handleChange}
    />
  );
};

export default SelectToBuy;
