/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { setBaseCurrency } from '../slice/currencySlice';
import CustomComponent from './CustomComponent';
import { generateOption } from '../utils/utils';

const BaseCurrencySelect = () => {
  const dispatch = useDispatch();

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const handleChange = async (e) => {
    const newValue = e.value;
    console.log(newValue);
    dispatch(setBaseCurrency(newValue));
  };

  return (
    <Select
      options={generateOption(currenciesRate)}
      defaultValue={{ value: 'RUB', label: 'Российский рубль' }}
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
