import React from 'react';
import { getFlags } from '../utils/utils';

const SelectCustomOption = (props) => {
  const { value, label } = props;

  return (
    <div className="d-flex align-items-center">
      {value ? <span className={`fi fi-${getFlags(value)}`} /> : null}
      {label ?? ''}
    </div>
  );
};

export default SelectCustomOption;
