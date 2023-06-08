import { useTranslation } from 'react-i18next';
import EuFlag from '../images/EU-flag.png';
import NoFlag from '../images/no-image.png';

export const getFlags = (code) => {
  if (code === 'EU') {
    return EuFlag;
  }
  if (['XA', 'XC', 'XD', 'XO', 'XP'].includes(code)) {
    return NoFlag;
  }
  return `https://flagsapi.com/${code}/flat/64.png`;
};

export const generateOption = (rates) => {
  const { t } = useTranslation();
  const options = rates.map(([code]) => {
    const value = code;
    const label = t(`currencyNames.${value}`);
    const flag = getFlags(code.slice(0, 2));
    return { value, label, flag };
  });
  return options;
};
