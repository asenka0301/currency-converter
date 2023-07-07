import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = ({ setSumToBuy, setSumToSell, sumToSell }) => {
  const [inputToBuyValue, setInputToBuyValue] = useState('');

  const soldCurrency = useSelector((state) => {
    const { currencyHave } = state.converterReducer;
    return currencyHave;
  });

  const currentRate = useSelector((state) => {
    const { rate } = state.converterReducer;
    return rate;
  });

  useEffect(() => {
    setInputToBuyValue(sumToSell);
  }, [sumToSell]);

  const countToBuySum = (value) => {
    if (value) {
      const currencyRate = Number((currentRate[1]));
      return +(Number(value) / currencyRate).toFixed(2);
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = (e.target.value).replace(/[^0-9.]/g, '');
    // setInputToBuyValue(newValue);
    setSumToSell(newValue);
    setSumToBuy(countToBuySum(newValue));
  };

  const getLabel = (currencyToSell, currencyToBuyInfo) => `1 ${currencyToBuyInfo[0]} = ${(1 / currencyToBuyInfo[1]).toFixed(3)} ${currencyToSell}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={currentRate.length && getLabel(soldCurrency, currentRate)}
      >
        <Form.Control
          type="number"
          value={inputToBuyValue}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
