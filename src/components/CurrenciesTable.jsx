import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import EuFlag from '../images/EU-flag.png';
import NoFlag from '../images/no-image.png';

const CurrenciesTable = () => {
  const { t } = useTranslation();
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

  return (
    <Table bordered hover className="mt-4 mb-4">
      <thead align="center">
        <tr>
          <th>Код</th>
          <th>Валюта</th>
          <th>Курс</th>
        </tr>
      </thead>
      <tbody align="center">
        { currenciesRate && currenciesRate.map(([code, rate]) => (
          <tr key={_.uniqueId()}>
            <td className="d-flex justify-content-center align-items-center">
              <img className="mx-2" style={{ width: 30, display: 'block' }} src={getFlags(code.slice(0, 2))} alt="flag" />
              {code}
            </td>
            <td align="left">{t(`currencyNames.${code}`)}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CurrenciesTable;
