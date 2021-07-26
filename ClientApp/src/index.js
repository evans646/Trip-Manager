import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/store';

import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore({});

ReactDOM.render(
<Provider store={store}>
<Auth0Provider
domain="dev-a7qtogm9.us.auth0.com"
clientId="MHgCOAnKlKQTMR1gQjq0GJb5RnHJJYx8"
redirectUri={window.location.origin}
>
<BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
</Auth0Provider>
  </Provider>,
  rootElement);

registerServiceWorker();
