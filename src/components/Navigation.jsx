import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import { CurrencyExchange } from 'react-bootstrap-icons';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand>
          <CurrencyExchange size={60} />
        </Navbar.Brand>
        <Nav
          variant="tabs"
          defaultActiveKey="/"
          className="w-100 me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        >
          <Nav.Item>
            <Nav.Link href="/">{t('currencyRates')}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/currencyConverter" as={Link} to="/currencyConverter">{t('currencyConverter')}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
