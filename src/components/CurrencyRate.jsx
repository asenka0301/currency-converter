// import axios from 'axios';
// import React, { useEffect } from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BaseCurrencySelect from './BaseCurrencySelect';
import CurrenciesTable from './CurrenciesTable';

const CurrencyRate = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = String(now.getFullYear()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = now.getDate();
    return `${day}.${month}.${year}`;
  };

  return (
    <Container className="h-100 mt-4">
      <Row>
        <Col>
          <p>
            {`На текущую дату ${getCurrentDate()} установлены следующие курсы иностранных валют по отношению к базовой валюте: `}
          </p>
          <BaseCurrencySelect />
          <CurrenciesTable />
        </Col>
      </Row>
    </Container>
  );
};
export default CurrencyRate;
