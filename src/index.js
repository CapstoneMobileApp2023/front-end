import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);


reportWebVitals();
