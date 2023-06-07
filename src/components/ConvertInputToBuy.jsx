import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = ({ sumToSell, setSumToBuy }) => {
  const [inputToBuyValue, setInputToBuyValue] = useState('');

  const soldCurrency = 'USD';
  const rate = ['RUB', 80.80369];

  const countToBuySum = (value) => {
    if (value) {
      const currencyRate = Number((rate[1]).toFixed(2));
      return (Number(value) / currencyRate).toFixed(2);
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputToBuyValue(newValue);
    setSumToBuy(countToBuySum(newValue));
  };

  const label = `1 ${rate[0]} = ${(1 / rate[1]).toFixed(2)} ${soldCurrency}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={label}
      >
        <Form.Control
          value={inputToBuyValue || sumToSell}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
