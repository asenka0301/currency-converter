import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = ({ setSumToSell, sumToBuy }) => {
  const [inputToSellValue, setInputToSellValue] = useState('');
  const soldCurrency = 'USD';
  const rate = ['RUB', 80.80369];

  const countToSellSum = (value) => {
    if (value) {
      const currencyRate = Number((rate[1]).toFixed(2));
      return +(Number(value) * currencyRate).toFixed(2);
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputToSellValue(newValue);
    setSumToSell(countToSellSum(newValue));
  };

  const label = `1 ${soldCurrency} = ${(rate[1]).toFixed(2)} ${rate[0]}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={label}
      >
        <Form.Control
          value={sumToBuy || inputToSellValue}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
