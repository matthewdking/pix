import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import env2 from 'env2';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store.config';
env2('./.env');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
