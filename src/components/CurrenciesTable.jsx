import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const CurrenciesTable = () => {
  const { t } = useTranslation();
  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

  return (
    <Table bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Код</th>
          <th>Валюта</th>
          <th>Курс</th>
        </tr>
      </thead>
      <tbody>
        { currenciesRate && currenciesRate.map(([code, rate]) => (
          <tr>
            <td>{code}</td>
            <td>{t(`currencyNames.${code}`)}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CurrenciesTable;
