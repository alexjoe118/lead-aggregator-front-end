import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from '@containers';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import * as webviewInteraction from './utils/webviewInteraction';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
  </Provider>,
  document.getElementById('toast'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
webviewInteraction.init();
