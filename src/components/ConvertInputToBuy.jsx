import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConverterInputToSell = () => {
  const [inputValue, setInputValue] = useState('');
  const soldCurrency = 'USD';
  const rate = ['RUB', 80.80369];

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const label = `1 ${rate[0]} = ${(1 / rate[1]).toFixed(3)} ${soldCurrency}`;

  return (
    <Form.Group className="form-floating mb-3 mt-2">
      <FloatingLabel
        label={label}
      >
        <Form.Control
          value={inputValue}
          onChange={handleChange}
          placeholder={soldCurrency}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

export default ConverterInputToSell;
