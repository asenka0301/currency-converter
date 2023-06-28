import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyHave, setCurrencyBuy, setRate } from '../slice/converterSlice';

const CurrencySwitchButton = (props) => {
  const {
    selectToSell,
    setSelectToSell,
    selectToBuy,
    setSelectToBuy,
  } = props;

  const dispatch = useDispatch();

  const currentRate = useSelector((state) => {
    const { rate } = state.converterReducer;
    return rate;
  });

  const handleClick = () => {
    const newSoldCurrency = selectToBuy;
    const newPurchasedCurrency = selectToSell;
    const newRate = Number((1 / currentRate[1]).toFixed(6));
    setSelectToSell(newSoldCurrency);
    setSelectToBuy(newPurchasedCurrency);
    dispatch(setCurrencyBuy(newPurchasedCurrency));
    dispatch(setCurrencyHave(newSoldCurrency));
    dispatch(setRate({ [newPurchasedCurrency]: newRate }));
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
