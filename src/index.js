import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import {reduxstore}from './redux/Store'


ReactDOM.render(
  <React.StrictMode>
    <Router >

    <Provider store={reduxstore}>
    <App />
    </Provider>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
