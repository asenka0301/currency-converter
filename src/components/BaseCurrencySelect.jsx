import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const BaseCurrencySelect = () => {
  const { t } = useTranslation();
  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  return (
    <Form className="d-flex w-25">
      <Form.Select size="3">
        { currenciesRate
        && currenciesRate.map(([code]) => (
          <option>{`${code} ${t(`currencyNames.${code}`)}`}</option>
        ))}
      </Form.Select>
    </Form>
  );
};

export default BaseCurrencySelect;
