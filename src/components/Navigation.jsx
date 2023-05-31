import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import { CurrencyExchange } from 'react-bootstrap-icons';

const Navigation = () => (
  <Navbar bg="white" className="shadow-sm">
    <Container>
      <Navbar.Brand>
        <CurrencyExchange size={60} />
      </Navbar.Brand>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}

      >
        <Nav.Link href="/">Курсы валют</Nav.Link>
        <Nav.Link href="/currencyConverter">Конвертер валют</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
