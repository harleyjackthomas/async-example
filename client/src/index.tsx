// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from "react-redux";
import store from "./store";

// App
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);