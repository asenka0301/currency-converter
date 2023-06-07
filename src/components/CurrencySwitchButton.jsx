import React from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { setCurrencyHave, setCurrencyBuy } from '../slice/converterSlice';

const CurrencySwitchButton = ({ soldCurrency, purchasedCurrency }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const newSoldCurrency = purchasedCurrency;
    const newPurchasedCurrency = soldCurrency;
    dispatch(setCurrencyHave(newSoldCurrency));
    dispatch(setCurrencyBuy(newPurchasedCurrency));
    // const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${newPurchasedCurrency}&base=${newSoldCurrency}`, { headers: { apikey: 'KTTErBwsDgDidqd57G7iIQpHOQJ7qnTQ' } });
    // if (response.status === 200) {
    //   const { rates } = response.data;
    //   dispatch(setRate(rates));
    // }
  };

  return (
    <div className="button-container">
      <button
        type="button"
        aria-label="Save"
        className="arrow-button mx-3"
        onClick={handleClick}
      />
    </div>
  );
};

export default CurrencySwitchButton;
