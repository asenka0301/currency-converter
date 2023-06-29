import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = ({ setSumToSell, sumToBuy }) => {
  const [inputToSellValue, setInputToSellValue] = useState('');

  const soldCurrency = useSelector((state) => {
    const { currencyHave } = state.converterReducer;
    return currencyHave;
  });

  const currentRate = useSelector((state) => {
    const { rate } = state.converterReducer;
    return rate;
  });

  useEffect(() => {
    setInputToSellValue(sumToBuy);
  }, [sumToBuy, currentRate]);

  const countToSellSum = (value) => {
    if (value) {
      const currencyRate = Number(currentRate[1]);
      return +(Number(value) * currencyRate).toFixed(2);
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputToSellValue(newValue);
    setSumToSell(countToSellSum(newValue));
  };

  const getLabel = (currencyToSell, currencyToBuyInfo) => `1 ${currencyToSell} = ${(currencyToBuyInfo[1]).toFixed(3)} ${currencyToBuyInfo[0]}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={currentRate.length && getLabel(soldCurrency, currentRate)}
      >
        <Form.Control
          value={inputToSellValue}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
