/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { setBaseCurrency } from '../slice/currencySlice';
import CustomComponent from './CustomComponent';
import { generateOption, getValue } from '../utils/utils';

const BaseCurrencySelect = () => {
  const dispatch = useDispatch();

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
    dispatch(setBaseCurrency(newValue));
  };

  return (
    <Select
      options={generateOption(currenciesRate)}
      value={currenciesRate && getValue(currenciesRate, base)}
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
