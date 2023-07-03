import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Loader from '../Loader';
import BaseCurrencySelect from '../BaseCurrencySelect';
import CurrenciesTable from '../CurrenciesTable';
import useLoad from '../../hooks';

const CurrencyRate = () => {
  const load = useLoad();
  const { t } = useTranslation();

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
            {t('currentDate', { data: getCurrentDate() })}
          </p>
          { load.loading ? <Loader />
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
