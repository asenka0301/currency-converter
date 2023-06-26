import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyConverterSelect from './CurrencyConverterSelect';
import ConverterInputToSell from './ConverterInputToSell';
import ConverterInputToBuy from './ConvertInputToBuy';
import CurrencySwitchButton from './CurrencySwitchButton';
import CurrencyService from '../API/CurrencyService';
import { setRate } from '../slice/converterSlice';

const CurrencyConverter = () => {
  const [sumToSell, setSumToSell] = useState('');
  const [sumToBuy, setSumToBuy] = useState('');
  const dispatch = useDispatch();

  const soldCurrency = useSelector((state) => {
    const { currencyHave } = state.converterReducer;
    return currencyHave;
  });

  const purchasedCurrency = useSelector((state) => {
    const { currencyBuy } = state.converterReducer;
    return currencyBuy;
  });

  useEffect(() => {
    const fetchContent = async () => {
      const response = await CurrencyService.getRate(soldCurrency, purchasedCurrency);
      console.log(response);
      if (response.status === 200) {
        const { rates } = response.data;
        dispatch(setRate(rates));
      }
    };
    fetchContent();
  }, []);

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Card className="w-100 p-5">
        <h4 className="font-weight-bold">У меня есть</h4>
        <ConverterInputToSell
          setSumToSell={setSumToSell}
          sumToBuy={sumToBuy}
        />
        <CurrencyConverterSelect
          defaultCurrency={soldCurrency}
          disabledCurrency={purchasedCurrency}
          selectId="soldCurrency"
        />
      </Card>
      <CurrencySwitchButton soldCurrency={soldCurrency} purchasedCurrency={purchasedCurrency} />
      <Card className="p-5 w-100">
        <h4 className="font-weight-bold">Хочу купить</h4>
        <ConverterInputToBuy sumToSell={sumToSell} setSumToBuy={setSumToBuy} />
        <CurrencyConverterSelect
          defaultCurrency={purchasedCurrency}
          disabledCurrency={soldCurrency}
          selectId="purchasedCurrency"
        />
      </Card>
    </Container>
  );
};

export default CurrencyConverter;
