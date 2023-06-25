import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { getFlags } from '../utils/utils';

const CurrenciesTable = () => {
  const { t } = useTranslation();
  const currenciesRate = useSelector((state) => {
    const { rates } = state.currenciesReducer;
    return rates;
  });

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
              <span className={`fi fi-${getFlags(code)}`} />
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
