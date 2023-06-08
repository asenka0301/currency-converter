import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { setCurrencyHave, setCurrencyBuy } from '../slice/converterSlice';
import CustomComponent from './CustomComponent';
import { generateOption } from '../utils/utils';

const CurrencyConverterSelect = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { defaultCurrency, disabledCurrency, selectId } = props;

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const handleChange = async (e) => {
    const newValue = e.value;
    const { id } = inputRef.current.props;
    if (id === 'soldCurrency') {
      dispatch(setCurrencyHave(newValue));
    } else {
      dispatch(setCurrencyBuy(newValue));
    }
  };

  return (
    <Select
      options={generateOption(currenciesRate)}
      defaultValue={generateOption(currenciesRate).find((item) => item.value === defaultCurrency)}
      components={{
        Option: CustomComponent(components.Option),
        SingleValue: CustomComponent(components.SingleValue),
      }}
      className="mt-2"
      isOptionDisabled={(option) => option.value === disabledCurrency}
      onChange={handleChange}
      ref={inputRef}
      id={selectId}
    />
  );
};

export default CurrencyConverterSelect;
