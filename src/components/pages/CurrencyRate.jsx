import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyService from '../../API/CurrencyService';
import { setCurrencies } from '../../slice/currencySlice';
import Loader from '../Loader';
import BaseCurrencySelect from '../BaseCurrencySelect';
import CurrenciesTable from '../CurrenciesTable';

const CurrencyRate = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const base = useSelector((state) => {
    const { baseCurrency } = state.currenciesReducer;
    return baseCurrency;
  });

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const response = await CurrencyService.getRates(base);
      if (response.status === 200) {
        const { rates } = response.data;
        dispatch(setCurrencies(rates));
      }
      setLoading(false);
    };
    fetchContent();
  }, [base]);

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
          { loading ? <Loader />
            : (
              <>
                <BaseCurrencySelect />
                <CurrenciesTable />
              </>
            )}
        </Col>
      </Row>
    </Container>
  );
};
export default CurrencyRate;
