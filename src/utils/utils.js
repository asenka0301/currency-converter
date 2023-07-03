import { useTranslation } from 'react-i18next';

export const getFlags = (code) => {
  if (code === 'ANG') {
    return 'nl';
  }
  if (['XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'BTC'].includes(code)) {
    return 'xx';
  }
  return code.toLowerCase().slice(0, 2);
};

export const generateOption = (rates) => {
  const { t } = useTranslation();
  const options = rates.map(([code]) => {
    const value = code;
    const label = t(`currencyNames.${value}`);
    return { value, label };
  });
  return options;
};

export const getValue = (rate, currency) => (
  generateOption(rate).find((item) => item.value === currency)
);
