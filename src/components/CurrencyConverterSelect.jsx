/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Select, { components } from 'react-select';
// import axios from 'axios';
import { setCurrencyHave, setCurrencyBuy } from '../slice/converterSlice';
import EuFlag from '../images/EU-flag.png';
import NoFlag from '../images/no-image.png';
import SelectCustomOption from './SelectCustomOption';

export const CustomComponent = (Comp) => (props) => (
  <Comp {...props}>
    <SelectCustomOption {...props.data} />
  </Comp>
);

const CurrencyConverterSelect = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { defaultCurrency, disabledCurrency, selectId } = props;

  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  const getFlags = (code) => {
    if (code === 'EU') {
      return EuFlag;
    }
    if (['XA', 'XC', 'XD', 'XO', 'XP'].includes(code)) {
      return NoFlag;
    }
    return `https://flagsapi.com/${code}/flat/64.png`;
  };

  const generateOption = (rates) => {
    const options = rates.map(([code]) => {
      const value = code;
      const label = t(`currencyNames.${value}`);
      const flag = getFlags(code.slice(0, 2));
      return { value, label, flag };
    });
    return options;
  };

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
