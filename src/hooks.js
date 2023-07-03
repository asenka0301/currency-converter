import { useContext } from 'react';

import LoadContext from './context/context';

const useLoad = () => useContext(LoadContext);

export default useLoad;
