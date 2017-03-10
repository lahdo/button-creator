import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/ButtonCreator.js';
import './index.css';
import './bootstrap.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./reducers/index";

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
