/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Select, { components } from 'react-select';
// import axios from 'axios';
// import { setCurrencies, setBaseCurrency } from '../slice/currencySlice';
import EuFlag from '../images/EU-flag.png';
import NoFlag from '../images/no-image.png';
import SelectCustomOption from './SelectCustomOption';

export const CustomComponent = (Comp) => (props) => (
  <Comp {...props}>
    <SelectCustomOption {...props.data} />
  </Comp>
);

const CurrencyConverterSelect = (props) => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currency } = props;

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

  // const [currentCountry, setCurrentCountry] = useState(base);

  // const handleChange = (newValue) => {
  //   setCurrentCountry(newValue);
  //   // dispatch(setBaseCurrency(e.target.value));
  //   // const { data } = await axios.get(`https://api.apilayer.com/fixer/latest&base=${e.target.value}&symbols`, { headers: { apikey: 'KTTErBwsDgDidqd57G7iIQpHOQJ7qnTQ' } });
  //   // dispatch(setCurrencies(data.rates));
  // };

  return (
    <Select
      options={generateOption(currenciesRate)}
      defaultValue={generateOption(currenciesRate).find((item) => item.value === currency)}
      components={{
        Option: CustomComponent(components.Option),
        SingleValue: CustomComponent(components.SingleValue),
      }}
    />
  );
};

export default CurrencyConverterSelect;
