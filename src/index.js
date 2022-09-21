import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const root = ReactDom.createRoot(document.querySelector('.content'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)