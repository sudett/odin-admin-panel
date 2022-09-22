import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const root = ReactDom.createRoot(document.querySelector('.content'));
root.render(
  <Router>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Router>
)