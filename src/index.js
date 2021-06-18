import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import ContactReducer from './redux/reducers/ContactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
const store =createStore(ContactReducer,composeWithDevTools())

ReactDOM.render(
  <>
  <Provider store={store}>
  <Router>
    <App />
    </Router>
    </Provider>
  </>,
  document.getElementById('root')
);
