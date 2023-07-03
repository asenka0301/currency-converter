import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from '../Loader';
import SelectToSell from '../SelectToSell';
import SelectToBuy from '../SelectToBuy';
import ConverterInputToSell from '../ConverterInputToSell';
import ConverterInputToBuy from '../ConvertInputToBuy';
import CurrencySwitchButton from '../CurrencySwitchButton';
import CurrencyService from '../../API/CurrencyService';
import { setRate } from '../../slice/converterSlice';
import useLoad from '../../hooks';

const CurrencyConverter = () => {
  const load = useLoad();
  const { t } = useTranslation();
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

  const currentRate = useSelector((state) => {
    const { rate } = state.converterReducer;
    return rate;
  });

  const [selectToSell, setSelectToSell] = useState(soldCurrency);
  const [selectToBuy, setSelectToBuy] = useState(purchasedCurrency);

  useEffect(() => {
    if (currentRate.length > 0) return;
    const fetchContent = async () => {
      load.setLoading(true);
      const response = await CurrencyService.getRate(soldCurrency, purchasedCurrency);
      if (response.status === 200) {
        const { rates } = response.data;
        dispatch(setRate(rates));
      }
      load.setLoading(false);
    };
    fetchContent();
  }, []);

  return (
    <Container className="converter d-flex justify-content-center align-items-center">
      {load.loading ? <Loader />
        : (
          <>
            <Card className="w-100 p-5">
              <h4 className="font-weight-bold">{t('have')}</h4>
              <ConverterInputToSell
                setSumToSell={setSumToSell}
                sumToBuy={sumToBuy}
              />
              <SelectToSell selectToSell={selectToSell} setSelectToSell={setSelectToSell} />
            </Card>
            <CurrencySwitchButton
              selectToSell={selectToSell}
              setSelectToSell={setSelectToSell}
              selectToBuy={selectToBuy}
              setSelectToBuy={setSelectToBuy}
            />
            <Card className="p-5 w-100">
              <h4 className="font-weight-bold">{t('buy')}</h4>
              <ConverterInputToBuy sumToSell={sumToSell} setSumToBuy={setSumToBuy} />
              <SelectToBuy selectToBuy={selectToBuy} setSelectToBuy={setSelectToBuy} />
            </Card>
          </>
        )}
    </Container>
  );
};

export default CurrencyConverter;
