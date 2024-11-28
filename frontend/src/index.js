import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from "../src/router/router"
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
     <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);


reportWebVitals();
