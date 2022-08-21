import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import App from './App';

hydrate(
  <BrowserRouter>
    <App {...window.initState} />
  </BrowserRouter>,
  document.getElementById('root'),
);
