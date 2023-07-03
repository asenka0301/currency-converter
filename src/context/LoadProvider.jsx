import React, { useState, useMemo } from 'react';
import LoadContext from './context';

const LoadProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const data = useMemo(() => ({
    loading,
    setLoading,
  }), [loading]);
  return (
    <LoadContext.Provider value={data}>
      { children }
    </LoadContext.Provider>
  );
};

export default LoadProvider;
