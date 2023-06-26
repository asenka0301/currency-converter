import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = ({ sumToSell, setSumToBuy }) => {
  const [inputToBuyValue, setInputToBuyValue] = useState('');

  useEffect(() => {
    setInputToBuyValue(sumToSell);
  }, [sumToSell]);

  const soldCurrency = useSelector((state) => {
    const { currencyHave } = state.converterReducer;
    return currencyHave;
  });

  const currentRate = useSelector((state) => {
    const { rate } = state.converterReducer;
    return rate;
  });

  const countToBuySum = (value) => {
    if (value) {
      const currencyRate = Number((currentRate[1]).toFixed(2));
      return (Number(value) / currencyRate).toFixed(2);
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputToBuyValue(newValue);
    setSumToBuy(countToBuySum(newValue));
  };

  const getLabel = (currencyToSell, currencyToBuyInfo) => `1 ${currencyToBuyInfo[0]} = ${(1 / currencyToBuyInfo[1]).toFixed(2)} ${currencyToSell}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={currentRate.length && getLabel(soldCurrency, currentRate)}
      >
        <Form.Control
          value={inputToBuyValue}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
