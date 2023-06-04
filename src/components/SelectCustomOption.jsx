import React from 'react';

const SelectCustomOption = (props) => {
  const { value, label, flag } = props;

  return (
    <div className="d-flex alihn-items-center">
      {value ? <img className="currency-flag" src={flag} alt="flag" /> : null}
      {label ?? ''}
    </div>
  );
};

export default SelectCustomOption;
