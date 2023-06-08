/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import SelectCustomOption from './SelectCustomOption';

const CustomComponent = (Comp) => (props) => (
  <Comp {...props}>
    <SelectCustomOption {...props.data} />
  </Comp>
);

export default CustomComponent;
