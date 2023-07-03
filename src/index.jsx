import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import LoadProvider from './context/LoadProvider';
import store from './slice/index';
import App from './App';
import i18n from './i18n';

i18n();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <LoadProvider>
      <App />
    </LoadProvider>
  </Provider>,
);
